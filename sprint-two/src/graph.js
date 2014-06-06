var Graph = function(){
	this.nodes = [];
	this.edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
	this.nodes.push(newNode);
	if (toNode){
		var edge = [newNode, toNode];
		this.edges.push(edge);
	}
};

Graph.prototype.contains = function(node){
	for (var i = 0; i < this.nodes.length; i++){
		if (node === this.nodes[i]){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for (var i = 0; i < this.nodes.length; i++){
		if (node === this.nodes[i]){
			this.nodes.splice(i,1);
			for (var j = 0; j < this.edges.length; j++){
				if (this.edges[j][0] === node || this.edges[j][1]){
					this.edges.splice(j,1);
					j--;
				}
			}
			return true;
		}
	}
	return false;
};

Graph.prototype.getEdge = function(fromNode, toNode){
	for (var i = 0; i < this.edges.length; i++){
		if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode){
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var edge = [fromNode, toNode];
	this.edges.push(fromNode, toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	for (var i = 0; i < this.edges.length; i++){
		if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode){
			return true;
		}
	}	
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
