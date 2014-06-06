var Graph = function(){
	this.nodes = [];
	this.edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
	this.nodes.push(newNode);
	var fromIndex = this.edges.push([]) - 1; // push an empty array onto edges array, then assign fromIndex to the last index in array
	var toIndex;
	for (var i = 0; i < this.edges.length; i++){
		this.edges[this.nodes.length - 1].push(false);
		if (toNode){
			if (this.nodes[i] === toNode){
				this.edges[0][i] = true;
			}
		}
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
				this.edges[j].splice(i,1);
			}
			this.edges.splice(i, 1);
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
			this.edges.splice(i,1);
			return true;
		}
	}	
	return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
