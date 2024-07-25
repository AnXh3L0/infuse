+++
title = "Contribute"
navbar = true
weight = 3
+++


Not much is happening here; we're just testing out syntax highlighting!

{{< highlight python >}}

import re

keep = ['select', 'where', 'from', 'and', 'script', 'on', 'src', '../', '<', '>']
output = ''

i = 0
while i < len(target):
	matched = False
	for j in keep:
		if target[i:i+len(j)].lower() == j.lower():
			output = output + target[i:i+len(j)]
			i=i+len(j)
			matched = True
	if not matched:
		if ' ' == target[i:i+1]:
			output = output + ' '
		elif re.search('\w', target[i:i+1]):
			output = output + "A"
		elif re.search('\d', target[i:i+1]):
			output = output + "1"
		else:
			output = output + "*"
		i = i+1

{{< / highlight >}}

{{< highlight awk >}}

awk '$3 > 10 {print $1, $3}' example.txt

{{< / highlight >}}