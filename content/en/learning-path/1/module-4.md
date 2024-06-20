+++
style = "module"
weight = 4
title = "Passive Investigation- Analyze URLs, hostnames, and IP addresses"
description = "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."
categories = ["Introduction"]
objective = "After completing this subtopic, practitioners should be able to do the following:Understand how a URL is structured;Understand DNS record types, WHOIS, and the difference between IPv4 and IPv6;Conduct basic reconnaissance on domains;Recognize common reverse proxies which shield origin IP addresses for purposes of DDoS protection or content delivery optimization, such as CloudFlare, Akamai, and Fastly;Discover or enumerate subdomains attached to a domain."
usecase = "A practitioner can use the skills outlined in this subtopic to begin a passive investigation against servers on the internet. A passive investigation is one that does not load any websites, but only looks up publicly available data on them. As such, the attacker will not be alerted that their website received additional visits, which could tip them off that an investigation is taking place.  By evaluating domain and IP info, an investigator can work towards generating rich technical information about the attack useful for community education, threat information sharing, discovery of associated attacker infrastructure, and for placing attacks in context of broader attack patterns. Some of those skills may be necessary as part of an initial triage process, for example to help an analyst decide if a link is suspicious. They will also prove very useful during an in-depth analysis of email headers, outlined in the next section."
+++

Passive investigation utilizes open source intelligence (OSINT) tools and resources which can give us many details about the digital footprint of attack infrastructure without an attacker noticing that we are investigating. 

## Foundation Knowledge 

This  dives into the basics of URLs, DNS, and IPv4/IPv6. If you feel comfortable with those concepts, excellent! Go and jump to the ‘workflows’ section. Otherwise, check out the documents and resources below:

- URL construction 

    - You should be able to read an URL and understand the significance of its parts, including identifying the scheme, sub-domains, primary domain, top-level domains, and any identifying features of the path or parameters in the URL. If you need to brush up on this knowledge, check out this document from MDN.

- URL Shorteners
    - Some malicious messages might use a URL shortener to hide the actual malicious link. If you want to see the final destination of the link, you can use an online service such as unshorten.me to view the full URL. Do note, however, that unshortening a URL might alert the attacker that you are conducting an investigation and should be considered active analysis;

- DNS 
    - Introduction to Domain Name System 
    - DNS record types 
    - WHOIS - You should be able to understand how WHOIS records are created and stored, read a WHOIS record, query the WHOIS record for any domain [replace with a resource]. If you need more info on that, see this guide.

- IPv4/IPv6 
    - What is IPv4?
    - https://bluecatnetworks.com/glossary/what-is-ipv4/
    - Getting to Understand the Differences between IPv4 and IPv6.
    - https://www.geeksforgeeks.org/differences-between-ipv4-and-ipv6
    - Understanding IP addresses
    - https://www.enterprisenetworkingplanet.com/standards-protocols/understanding-ip-addresses/ 

- In addition to IP addresses, it’s useful to read up on port numbers.

## Workflows: Tools & Capabilities

Passive IP/DNS investigations can be divided into several categories.

## Obtain Essential IP/DNS Information

One of the first things we should do in our investigation is gain some initial information on domains and hosts. Several tools and tool categories that can help with that.