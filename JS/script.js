let arOfFunctions = ["def dextra(graph, start):", "shortest_paths = {start: (None, 0)}", "current_node = start", "visited = set()", "while current_node is not None:", "visited.add(current_node)", "destinations = graph[current_node]", "weight_to_current_node = shortest_paths[current_node][1]", "for next_node, weight in destinations.items():", "weight = weight_to_current_node + weight", "if next_node not in shortest_paths: shortest_paths[next_node] = (current_node, weight)", "else: current_shortest_weight = shortest_paths[next_node][1]", "if current_shortest_weight > weight:", "shortest_paths[next_node] = (current_node, weight)", "next_destinations = {node: shortest_paths[node] for node in shortest_paths if node not in visited}", "if not next_destinations:", "return shortest_paths", "current_node = min(next_destinations, key=lambda k: next_destinations[k][1])", "return shortest_paths",
    "func dextra(graph map[string]map[string]int, start string) map[string][2]interface{} {", "shortestPaths := map[string][2]interface{}{start: {nil, 0}}", "currentNode := start", "visited := map[string]bool{}", "for currentNode != \"\" {", "visited[currentNode] = true", "destinations := graph[currentNode]", "weightToCurrentNode := shortestPaths[currentNode][1].(int)", "for nextNode, weight := range destinations {", "weight += weightToCurrentNode", "if _, ok := shortestPaths[nextNode]; !ok {", "shortestPaths[nextNode] = [2]interface{}{currentNode, weight}", "} else {", "currentShortestWeight := shortestPaths[nextNode][1].(int)", "if currentShortestWeight > weight {", "shortestPaths[nextNode] = [2]interface{}{currentNode, weight}", "}", "}", "}", "nextDestinations := map[string][2]interface{}{}", "for node, path := range shortestPaths {", "if !visited[node] {", "nextDestinations[node] = path", "}", "}", "if len(nextDestinations) == 0 {", "return shortestPaths", "}", "minNode := \"\"", "minWeight := int(^uint(0) >> 1)", "for node, path := range nextDestinations {", "if path[1].(int) < minWeight {", "minNode = node", "minWeight = path[1].(int)", "}", "}", "currentNode = minNode", "}", "return shortestPaths", "}",
     "shortestPaths.put(start, new Object[]{null, 0});", "String currentNode = start;", "Set<String> visited = new HashSet<>();", "while (currentNode != null) {", "visited.add(currentNode);", "Map<String, Integer> destinations = graph.get(currentNode);", "int weightToCurrentNode = (int) shortestPaths.get(currentNode)[1];", "for (Map.Entry<String, Integer> nextNode : destinations.entrySet()) {", "int weight = weightToCurrentNode + nextNode.getValue();", "if (!shortestPaths.containsKey(nextNode.getKey())) {", "shortestPaths.put(nextNode.getKey(), new Object[]{currentNode, weight});", "} else {", "int currentShortestWeight = (int) shortestPaths.get(nextNode.getKey())[1];", "if (currentShortestWeight > weight) {", "shortestPaths.put(nextNode.getKey(), new Object[]{currentNode, weight});", "}", "}", "}", "String nextNode = null;", "int minWeight = Integer.MAX_VALUE;", "for (Map.Entry<String, Object[]> path : shortestPaths.entrySet()) {", "if (!visited.contains(path.getKey()) && (int) path.getValue()[1] < minWeight) {", "nextNode = path.getKey();", "minWeight = (int) path.getValue()[1];", "}", "}", "currentNode = nextNode;", "}", "return shortestPaths;", "}",
    "shortestPaths[start] = {\"\", 0};", "std::string currentNode = start;", "std::set<std::string> visited;", "while (!currentNode.empty()) {", "visited.insert(currentNode);", "const auto& destinations = graph.at(currentNode);", "int weightToCurrentNode = shortestPaths[currentNode].second;", "for (const auto& nextNode : destinations) {", "int weight = weightToCurrentNode + nextNode.second;", "if (shortestPaths.find(nextNode.first) == shortestPaths.end()) {", "shortestPaths[nextNode.first] = {currentNode, weight};", "} else if (shortestPaths[nextNode.first].second > weight) {", "shortestPaths[nextNode.first] = {currentNode, weight};", "}", "}", "std::string nextNode;", "int minWeight = std::numeric_limits<int>::max();", "for (const auto& path : shortestPaths) {", "if (visited.find(path.first) == shortestPaths.end() && path.second.second < minWeight) {", "nextNode = path.first;", "minWeight = path.second.second;", "}", "}", "currentNode = nextNode;", "}", "return shortestPaths;", "}",
    "print('Hello world')", "fmt.Println('Hello world')", "System.out.println('Hello world')", "Console.WriteLine('Hello world')", "echo 'Hello world'"];
arrOfColors = ['#bb7237', '#ffffff'];
// #bb7237
canvas = document.createElement("canvas");
context = canvas.getContext("2d");
context.font = "5vh JetBrains Mono";
let elem = document.getElementById("background");
console.log(elem.innerHTML);
for (let i = 1; i < 13; i++) {
    let newSt = "", st = "";
    if (i % 2 === 1) {
        elem.innerHTML = elem.innerHTML + `<div class="listingsOfCode" id="code${i}"><span id="listing${i}" class="forward"></span></div>`;
    } else {
        elem.innerHTML = elem.innerHTML + `<div class="listingsOfCode" id="code${i}"><span id="listing${i}" class="backwards"></span></div>`;
    }
    while (context.measureText(st).width < window.screen.width * 2) {
        let listing = document.getElementById(`listing${i}`);
        newSt = arOfFunctions[Math.floor(Math.random() * arOfFunctions.length)];
        st += newSt;
        listing.innerHTML = listing.innerHTML + `<span style="color: ${arrOfColors[Math.floor(Math.random() * arrOfColors.length)]}">` + newSt + "</span>";
    }
    console.log(`${i} ` + context.measureText(st).width);
}

for (let i = 1; i < 13; i++) {
    elem = document.getElementById("code" + i);
    let newSt = "", st = "";
    if (i % 2 === 1) {
        elem.innerHTML = elem.innerHTML + `<span id="delayListing${i}" class="forward-delay"></span>`;
    } else {
        elem.innerHTML = elem.innerHTML + `<span id="delayListing${i}" class="backwards-delay"></span>`;
    }
    while (context.measureText(st).width < window.screen.width * 2) {
        listing = document.getElementById(`delayListing${i}`);
        newSt = arOfFunctions[Math.floor(Math.random() * arOfFunctions.length)];
        st += newSt;
        listing.innerHTML = listing.innerHTML + `<span style="color: ${arrOfColors[Math.floor(Math.random() * arrOfColors.length)]}">` + newSt + "</span>";
    }
    console.log(`${i} ` + context.measureText(st).width);
}

