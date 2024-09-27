document.addEventListener('DOMContentLoaded', (event) => {
  // Quote rotation
  const quotes = document.querySelectorAll('#quote-container p');
  let currentQuote = 0;
  function changeQuote() {
      quotes[currentQuote].classList.remove('active');
      currentQuote = (currentQuote + 1) % quotes.length;
      quotes[currentQuote].classList.add('active');
  }
  setInterval(changeQuote, 5000); // Change quote every 5 seconds

  // Neural Network Visualization
  const svg = d3.select("#neural-network");
  const width = svg.node().getBoundingClientRect().width;
  const height = svg.node().getBoundingClientRect().height;

  function createNeuralNetwork(nodesCount, linksCount) {
      const nodes = Array.from({ length: nodesCount }, (_, i) => ({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
      }));

      const links = Array.from({ length: linksCount }, () => ({
          source: Math.floor(Math.random() * nodesCount),
          target: Math.floor(Math.random() * nodesCount),
      }));

      const simulation = d3.forceSimulation(nodes)
          .force("link", d3.forceLink(links).id(d => d.id))
          .force("charge", d3.forceManyBody().strength(-50))
          .force("center", d3.forceCenter(width / 2, height / 2));

      const linkElements = svg.append("g")
          .attr("class", "links")
          .selectAll("line")
          .data(links)
          .enter()
          .append("line")
          .attr("class", "link");

      const nodeElements = svg.append("g")
          .attr("class", "nodes")
          .selectAll("circle")
          .data(nodes)
          .enter()
          .append("circle")
          .attr("class", "node")
          .attr("r", 5)
          .call(d3.drag()
              .on("start", dragstarted)
              .on("drag", dragged)
              .on("end", dragended));

      svg.on("click", function(event) {
          if (event.target.tagName === "svg") {
              const [x, y] = d3.pointer(event);
              const newNode = { id: nodes.length, x, y };
              nodes.push(newNode);
              const newLink = { source: nodes[Math.floor(Math.random() * (nodes.length - 1))], target: newNode };
              links.push(newLink);
              updateNetwork();
          }
      });

      function updateNetwork() {
          nodeElements = nodeElements.data(nodes, d => d.id);
          nodeElements.exit().remove();
          nodeElements = nodeElements.enter().append("circle")
              .attr("class", "node")
              .attr("r", 5)
              .merge(nodeElements)
              .call(d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended));

          linkElements = linkElements.data(links);
          linkElements.exit().remove();
          linkElements = linkElements.enter().append("line")
              .attr("class", "link")
              .merge(linkElements);

          simulation.nodes(nodes);
          simulation.force("link").links(links);
          simulation.alpha(1).restart();
      }

      simulation.on("tick", () => {
          linkElements
              .attr("x1", d => d.source.x)
              .attr("y1", d => d.source.y)
              .attr("x2", d => d.target.x)
              .attr("y2", d => d.target.y);

          nodeElements
              .attr("cx", d => d.x)
              .attr("cy", d => d.y);
      });

      function dragstarted(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
      }

      function dragged(event, d) {
          d.fx = event.x;
          d.fy = event.y;
      }

      function dragended(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
      }
  }

  createNeuralNetwork(10, 15);

  window.addEventListener('resize', () => {
      svg.selectAll("*").remove();
      const newWidth = svg.node().getBoundingClientRect().width;
      const newHeight = svg.node().getBoundingClientRect().height;
      svg.attr("width", newWidth).attr("height", newHeight);
      createNeuralNetwork(10, 15);
  });
});