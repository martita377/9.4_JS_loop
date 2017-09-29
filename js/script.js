// JS - Tree

function drawTree(x) {
	for(i=0; i<x; i++) {
		var star = '';
		for(j=0; j<=i; j++) {
			star += '*';
		}
		console.log(star);
		document.write(star);
		document.write('<br>');
	}
}

var rows = parseInt(prompt("Enter number of rows:"));
drawTree(rows);
