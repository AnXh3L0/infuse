+++
style = "module"
weight = 4
title = "Passive Investigation - Analyze URLs, hostnames, and IP addresses"
description = "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."
+++

## Use Case

A practitioner can use the skills outlined in this subtopic to **begin a passive investigation against servers on the internet**. A passive investigation is one that does not load any websites, but only looks up publicly available data on them. As such, the attacker will not be alerted that their website received additional visits, which could tip them off that an investigation is taking place. By evaluating domain and IP info, an investigator can work towards **generating rich technical information about the attack **useful for community education, threat information sharing, discovery of associated attacker infrastructure, and for placing attacks in context of broader attack patterns.

Some of those skills may be necessary as part of an initial triage process, for example to help an analyst decide if a link is suspicious. They will also prove very useful during an in-depth analysis of email headers, outlined in the next section.

## Objectives

After completing this subtopic, practitioners should be able to do the following:

- Understand how a URL is structured;
- Understand DNS record types, WHOIS, and the difference between IPv4 and IPv6;
- Conduct basic reconnaissance on domains;
- Recognize common reverse proxies which shield origin IP addresses for purposes of DDoS protection or content delivery optimization, such as CloudFlare, Akamai, and Fastly;
- Discover or enumerate subdomains attached to a domain.

---

Passive investigation utilizes open source intelligence (OSINT) tools and resources which can give us many details about the digital footprint of attack infrastructure without an attacker noticing that we are investigating.

## Foundation Knowledge

This dives into the basics of URLs, DNS, and IPv4/IPv6. If you feel comfortable with those concepts, excellent! Go and jump to the ‘workflows’ section. Otherwise, check out the documents and resources below:

- URL construction
  - You should be able to read an URL and understand the significance of its parts, including identifying the scheme, sub-domains, primary domain, top-level domains, and any identifying features of the path or parameters in the URL. If you need to brush up on this knowledge, check out [this document from MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL).
- URL Shorteners
  - Some malicious messages might use a URL shortener to hide the actual malicious link. If you want to see the final destination of the link, you can use an online service such as [unshorten.me](https://unshorten.me/) to view the full URL. Do note, however, that unshortening a URL might alert the attacker that you are conducting an investigation and should be considered active analysis;
- DNS
  - [Introduction to Domain Name System ](https://aws.amazon.com/route53/what-is-dns/)
  - [DNS record types](https://www.cloudflare.com/learning/dns/dns-records/)
  - WHOIS - You should be able to understand how WHOIS records are created and stored, read a WHOIS record, query the WHOIS record for any domain [replace with a resource]. If you need more info on that, see [this guide](https://www.domain.com/blog/what-is-whois-and-how-is-it-used/).
- IPv4/IPv6
  - What is IPv4?
    [https://bluecatnetworks.com/glossary/what-is-ipv4/](https://bluecatnetworks.com/glossary/what-is-ipv4/)
    - Getting to Understand the Differences between IPv4 and IPv6.
      [https://www.geeksforgeeks.org/differences-between-ipv4-and-ipv6](https://www.geeksforgeeks.org/differences-between-ipv4-and-ipv6/)
    - Understanding IP addresses
      [https://www.enterprisenetworkingplanet.com/standards-protocols/understanding-ip-addresses/](https://www.enterprisenetworkingplanet.com/standards-protocols/understanding-ip-addresses/)
- In addition to IP addresses, it’s useful to read up on [port numbers](https://www.techtarget.com/searchnetworking/definition/port-number).

## Workflows: Tools & Capabilities

Passive IP/DNS investigations can be divided into several categories.

## Obtain Essential IP/DNS Information

One of the first things we should do in our investigation is gain some initial information on domains and hosts. Several tools and tool categories that can help with that.

- WHOIS

  WHOIS records are publicly accessible and contain useful information on a domain. Learn how to use web-based (for example [ARIN whois](https://search.arin.net/rdap/) or [who.is](https://who.is/)) or [command-line utilities](https://www.arin.net/resources/registry/whois/rws/cli/) to view a WHOIS record and learn to read the registrant information (if disclosed), the registrar, the date of registry, and the DNS nameservers which indicate where the authoritative records for that DNS zone are hosted.

  WHOIS can also be run on an IP address in order to attempt to identify the company responsible for the IP, thereby potentially telling you the hosting company serving a website.

- dig & host

  **dig** is a command-line tool either pre-installed or available for major operating systems. It allows you to easily look up (follow [tutorial here](https://phoenixnap.com/kb/linux-dig-command-examples)) the DNS records of any domain, and differentiates between different record types. While the linked tutorial contains many elements of **dig** syntax, the most common use is to lookup A and MX record types. dig is quite popular among analysts since it is simple and easy to automate. **host **(see [tutorial link](https://www.geeksforgeeks.org/host-command-in-linux-with-examples/)) is an alternative command line tool which rapidly converts a hostname into an IP address with simpler syntax. There are also plenty of alternatives to dig with more features or better readability, [such as doggo](https://github.com/mr-karan/doggo).

  Look out for common content distribution reverse-proxy name servers such as those offered by Akamai (e.g. a1-64.akam.net), CloudFlare (e.g. eve.ns.cloudflare.com), Fastly (e.g. ns3.fastly.net), as these will obscure the actual origin server IP. After spending some time looking up name servers, you will easily be able to recognize many of those proxies. If you, for example, run the dig command to look up theguardian.com, you will see that it resolves to Fastly servers (at least at time of writing).

- geoIP
  IP addresses are roughly tied to physical geographies. This means that, if you know an IP address, [you can figure out](https://www.maxmind.com/en/geoip-demo) (MaxMind GeoIP lookup demo linked)) with some degree of certainty where in the world (country, region) the device that uses this address is located. There are many databases, known as geoIP, which allow you to look that up. Do note that the accuracy of IP-based lookups can be extremely varied: sometimes, it’s possible to track down an IP address to a specific organization, while at other times you only get country-level granularity.

🛠️ Take a moment to practice using these services. You could, for example, use them to look up your own website or that of your organization.

### Discovering Hidden DNS/IP Information

There are a variety of ways that one can obtain additional information about hosts in a domain. Do note, however, that most of those techniques only work some of the time and often fail. If one of them does not work, do not be discouraged. Some of these methods include:

- Using DNS Zone Transfers. A feature (usually disabled over the internet) of authoritative DNS servers is to give out their entire set of DNS records for a given domain. Its intended use is to synchronize replica servers to the primary server. Check [out this guide](https://0xffsec.com/handbook/information-gathering/subdomain-enumeration/) on how to use dig and other tools to figure out subdomains based on DNS zone transfers.
- Brute-forcing subdomains. One can simply guess subdomains using a list of common subdomain prefixes and ask the DNS server for those servers’ IP addresses. (e.g. webmail.attacker.com, vpn.attacker.com, remoteaccess.attacker.com, etc.) So long as the server gives a NXDOMAIN (no such domain) response for non-existent hostnames, one can often find hidden domains this way. This [guide on enumerating subdomains](https://0xffsec.com/handbook/information-gathering/subdomain-enumeration/) also lists some brute forcing tools.
- Reverse-lookup of adjacent IP addresses. Some DNS servers will let you look up the hostname for an IP address. It is common for self-hosted infrastructure to exist in a small block of IP addresses. Given this, it’s sometimes possible to, given one hostname's IP address (e.g. 127.0.0.5), look up the hostnames of nearby IP addresses (e.g. 127.0.0.1-127.0.0.254).

There exist tools that use these and other techniques to try to discover additional network resources. One of the first of these, still under development, is called [Fierce](https://www.kali.org/tools/fierce/). Another popular tool is [DNS Recon](https://securitytrails.com/blog/dnsrecon-tool). This [blog post describing DNSRecon](https://securitytrails.com/blog/dnsrecon-tool#content-alternatives-to-dnsrecon) also includes a list of other popular DNS enumeration tools.

### Enriching IP/DNS information using Internet Scanner Services

Once you have obtained identifier information (domains and IPs) you can search this data in greater depth using some services which allow you to investigate additional information about the host and any associated activity around it.

Learn how to view open ports, active services, and service banners from a given IP by using one of numerous web intelligence scanning services. Note that this is still a passive investigation technique as these services repeatedly scan the web for their data sets and you will not be initiating new activity on the infrastructure of interest:

- Use [Censys Search](https://search.censys.io/) to observe open ports, running services, TLS certificates, and more for a given IP.
- Use [Shodan ](https://www.shodan.io/)(subscription required for some features, and requires utilization of Shodan filters in queries, see [reference](https://www.shodan.io/search/filters) and [examples](https://www.shodan.io/search/examples)) to search for information on services running on a server by IP address. Shodcan can also search for all servers running a service with a particular banner.
- Use [DNS Dumpster](https://dnsdumpster.com/) to look up the potential attack surfaces of internet facing services.

These and similar services and databases can help you identify the activities and history of a specified server/service.

Other scanner services also collect **DNS history**, allowing you to peer back in time to learn what other domain _resolutions_ have appeared for a given IP, when they appeared/disappeared, as well as subdomains for a given domain.

- [Security Trails](https://securitytrails.com/)
- [Microsoft Defender Threat Intelligence ](https://ti.defender.microsoft.com/)(formerly RiskIQ) provides limited DNS history and resolutions data to free-tier customers.

### Enriching IP/DNS information using threat intelligence databases

Several services will collect indicators of threats and history of malicious behavior. If you need to ensure that no new scanning activity is initiated (which would be active investigation), ensure that you are not initiating a new scan with your search (for instance, while VirusTotal allows you to check a URL, it will launch a new scan against the URL, thereby initiating activity which could be detected as an investigation).

- [Alienvault OTX](https://otx.alienvault.com/) is a community-driven open resource for malicious indicators. Searching for an IP or host name will display useful OSINT information as well as records of any malicious activity previously obtained.
- [Mandiant Advantage](https://www.mandiant.com/multi-vendor-security-platform-free-access) (owned by Google) provides search limited functionality on their free tier.

### Using Certificate Search

Almost every website a user will encounter now uses HTTPS, which uses a technology known as TLS (Transport Layer Security). Malicious websites use it too, in part playing on users' beliefs that HTTPS and a lock appearing in the browser's URL bar means that the website is therefore safe, regardless of other factors.

As TLS certificates must be signed by a trusted Certificate Authority (CA) in order to be trusted by the browser, a substantial amount of data about the domain may be available for your investigation as you look for shared infrastructure, subdomains, identifiers, and other assets.

Rich certificate data is publicly available thanks to the practice of Certificate Transparency, in which Certificate Authorities add all certificates issued to a tamper-resistant public log. It can be helpful to understand this system - see a brief overview at the [Certificate Transparency website](https://certificate.transparency.dev/) or take a deeper dive in their technical overview at [How CT Works](https://certificate.transparency.dev/howctworks/). It’s useful for learners who want to learn more about tracking and detecting malicious infrastructure to have a broad understanding of this system.

Making practice use of certificate search involves searching for domains, subdomains, IPs, identifying interesting information such as dates of issue, and correlating information found in issued certificates.

Read through the guide at [Certificates: The OSINT Gift that Keeps on Giving…](https://www.osintcurio.us/2019/03/12/certificates-the-osint-gift-that-keeps-on-giving/) which describes key investigative fields and searches using Censys and Shodan, and watch the accompanying [10-minute video on YouTube](https://www.youtube.com/watch?v=XHltHamQVoA) which carries out the same search using [crt.sh](https://crt.sh/). It is useful to be able to use all three search utilities. In particular, ensure you understand:

- What are some of the ‘interesting’ fields within a certificate when conducting an investigation
- How to search within those fields on the various platforms
- How to identify subdomains, host IPs, alternative domains issued for a certificate.

Note that the Censys search API syntax changed in 2021 and some of the searches in the above tutorials will not work. For instance instead of “parsed.names:” simply use “names:” in the new syntax.

Many tools have been built around certificate transparency logs. For instance, try enumerating for subdomains using [MassDNS ](https://github.com/blechschmidt/massdns#reconnaissance-by-brute-forcing-subdomains)(see instructions for using scripts/ct.py on the READMe page).

Censys offers further reading on advanced techniques for tracking and hunting for threat actors using their platform at [Advanced Persistent Infrastructure Tracking](https://censys.com/advanced-persistent-infrastructure-tracking/).

**Things to note**

When you use a tool such as WHOIS, you will find many addresses which are hidden behind Cloudflare or similar services. This means that the administrators of this address are partially hosting it using a major third party service, for example to maintain greater anonymity or for DDoS protection. Similarly, many domains use privacy services to make sure that their data does not show up in WHOIS. Some people also put fake data into WHOIS. If this is the case, then analyzing the address through WHOIS will not yield a lot of good information (save perhaps for the creation date of the domain) and you'll need to use alternative forms of analysis.

Many malicious URLs used in phishing emails utilize (sometimes multiple) redirects, meaning the initial URL may be less relevant for analysis. Identifying redirects and other IPs involved will require active interaction with the URL, which is covered in Active Investigation skill.

Attackers can host their own DNS server and track requests. In this case, DNS requests may not be "passive" and may alert the attacker of the investigation. Especially look out for hostnames that might have identifiers in them, like r2378r233yr39wjwr.example.com.

## Learning Resources

<table>
  <tr>
   <td>Title
   </td>
   <td>Description
   </td>
   <td>Language
   </td>
   <td>Cost
   </td>
   <td>URL
   </td>
  </tr>
  <tr>
   <td>What is a URL?
   </td>
   <td>A brief overview of what URLs are, how they are constructed, and what additional features (anchors and the like) they might have
   </td>
   <td>Chinese, English, French, Japanese, Korean, Russian, Spanish
   </td>
   <td>Free
   </td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL">https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL</a> 
   </td>
  </tr>
  <tr>
   <td>Introduction to DNS
   </td>
   <td>A basic overview of how DNS works
   </td>
   <td>Video in English, text in Arabic, Bahasa Indonesian, German, Spanish, French, Italian, Portuguese, Vietnamese, Turkish, Russian, Thai, Japanese, Korean, Chinese, Taiwanese
   </td>
   <td>Free
   </td>
   <td><a href="https://aws.amazon.com/route53/what-is-dns/">https://aws.amazon.com/route53/what-is-dns/</a>
   </td>
  </tr>
  <tr>
   <td>Overview of DNS record types
   </td>
   <td>Includes the most common record types, and some less common ones. 
   </td>
   <td>English, German, Spanish, French, Italian, Japanese, Korean, Portuguese, Taiwanese, Mandarin
   </td>
   <td>Free
   </td>
   <td><a href="https://www.cloudflare.com/learning/dns/dns-records/">https://www.cloudflare.com/learning/dns/dns-records/</a> 
   </td>
  </tr>
  <tr>
   <td>Using the dig command
   </td>
   <td>How to query for information about IP addresses
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://phoenixnap.com/kb/linux-dig-command-examples">https://phoenixnap.com/kb/linux-dig-command-examples</a> 
   </td>
  </tr>
  <tr>
   <td>doggo
   </td>
   <td>An alternative to the dig command, with very similar functionality but differently formatted output
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://github.com/mr-karan/doggo">https://github.com/mr-karan/doggo</a> 
   </td>
  </tr>
  <tr>
   <td>host command in Linux with examples
   </td>
   <td>A guide on how to use the host command in Linux, another commonly used tool to analyze servers and other types of infrastructure
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.geeksforgeeks.org/host-command-in-linux-with-examples/">https://www.geeksforgeeks.org/host-command-in-linux-with-examples/</a> 
   </td>
  </tr>
  <tr>
   <td>Further DNS reconnaissance
   </td>
   <td>Various tools to automate searching for related servers
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td>DNSRecon: <a href="https://securitytrails.com/blog/dnsrecon-tool">https://securitytrails.com/blog/dnsrecon-tool</a> 
<p>
Fierce: <a href="https://www.kali.org/tools/fierce/">https://www.kali.org/tools/fierce/</a> and <a href="https://salsa.debian.org/pkg-security-team/fierce">https://salsa.debian.org/pkg-security-team/fierce</a> 
<p>
You can also use VirusTotal to <a href="https://support.virustotal.com/hc/en-us/articles/115002739245-Searching">manually search</a> for names of URLs and servers
   </td>
  </tr>
  <tr>
   <td>GeoIP
   </td>
   <td>Look up the (likely) physical location of a server by IP address
   </td>
   <td>English
   </td>
   <td>Free for limited quantities
   </td>
   <td><a href="https://www.maxmind.com/en/geoip-demo">https://www.maxmind.com/en/geoip-demo</a> 
   </td>
  </tr>
  <tr>
   <td>whois/RDAP
   </td>
   <td>Shows ownership information for a domain or IP address
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td>Tool: <a href="https://who.is/">https://who.is/</a>
<p>
<a href="https://search.arin.net/rdap/">https://search.arin.net/rdap/</a>, <a href="https://lookup.icann.org/en">https://lookup.icann.org/en</a> 
   </td>
  </tr>
  <tr>
   <td>What is whois and how is it used
   </td>
   <td>A quick summary of what a whois database is and what its potential limitations are
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.domain.com/blog/what-is-whois-and-how-is-it-used/">https://www.domain.com/blog/what-is-whois-and-how-is-it-used/</a> 
   </td>
  </tr>
  <tr>
   <td>The ultimate guide to the whois database
   </td>
   <td>Offers a look at what whois can (and cannot) be used for
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://domainnamestat.com/blog/the-ultimate-guide-to-the-whois-database">https://domainnamestat.com/blog/the-ultimate-guide-to-the-whois-database</a> 
   </td>
  </tr>
  <tr>
   <td>What is an IPv4 address?
   </td>
   <td>There are two types of IP addresses, IPv4 and IPv6. This guide provides an introduction to the former
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://bluecatnetworks.com/glossary/what-is-ipv4/">https://bluecatnetworks.com/glossary/what-is-ipv4/</a> 
   </td>
  </tr>
  <tr>
   <td>Differences between IPv4 and IPv6
   </td>
   <td>Outlines the key differences between the two types of IP addresses
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.geeksforgeeks.org/differences-between-ipv4-and-ipv6/">https://www.geeksforgeeks.org/differences-between-ipv4-and-ipv6/</a> 
   </td>
  </tr>
  <tr>
   <td>Understanding IP addresses
   </td>
   <td>A quick introduction to what IP addresses are, what the different types thereof are
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.enterprisenetworkingplanet.com/standards-protocols/understanding-ip-addresses/">https://www.enterprisenetworkingplanet.com/standards-protocols/understanding-ip-addresses/</a> 
   </td>
  </tr>
  <tr>
   <td>What are port numbers and how do they work?
   </td>
   <td>A quick introduction to port numbers, includes a list of some key ones
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.techtarget.com/searchnetworking/definition/port-number">https://www.techtarget.com/searchnetworking/definition/port-number</a> 
   </td>
  </tr>
  <tr>
   <td>Subdomain enumeration: the ultimate guide
   </td>
   <td>A guide which contains several techniques on enumerating (figuring out) which subdomains a specific domain contains. It’s worth remembering that not all techniques will work on all domains/ servers.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://0xffsec.com/handbook/information-gathering/subdomain-enumeration/">https://0xffsec.com/handbook/information-gathering/subdomain-enumeration/</a> 
   </td>
  </tr>
  <tr>
   <td>Threat intelligence services with DNS history
   </td>
   <td>Those services perform DNS scans and add history; analysts who use them can therefore see whether certain websites or addresses moved or changed
   </td>
   <td>English
   </td>
   <td>Free with premium features (security trails) / Free (Microsoft Defender)
   </td>
   <td><a href="https://securitytrails.com/">https://securitytrails.com/</a>
<p>
<a href="https://ti.defender.microsoft.com/">https://ti.defender.microsoft.com/</a> 
   </td>
  </tr>
  <tr>
   <td>Alienvault OTX
   </td>
   <td>A service that compiles threat intelligence and indicators put forward by the community
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://otx.alienvault.com/">https://otx.alienvault.com/</a> 
   </td>
  </tr>
  <tr>
   <td>Mandiant Advantage
   </td>
   <td>Another threat intelligence service, currently owned by Google
   </td>
   <td>English
   </td>
   <td>Some features are available on the free tier
   </td>
   <td><a href="https://www.mandiant.com/multi-vendor-security-platform-free-access">https://www.mandiant.com/multi-vendor-security-platform-free-access</a> 
   </td>
  </tr>
  <tr>
   <td>Shodan
   </td>
   <td>Shows information on services running on a server by IP address, can also search for all servers running a service with a particular banner
   </td>
   <td>English
   </td>
   <td>Free tier
<p>
Basic $49
<p>
More volume available as  monthly subscriptions
<p>
(Free basic for academic emails, occasionally has great discounts, e.g. membership for $5 when they got 5 million users in July 2022, and $4 when they hit 4 million users in March of 2021)
   </td>
   <td>Background: <a href="https://en.wikipedia.org/wiki/Banner_grabbing">https://en.wikipedia.org/wiki/Banner_grabbing</a> 
<p>
Tool: <a href="https://www.shodan.io/">https://www.shodan.io/</a> 
<p>
Documentation: <a href="https://help.shodan.io/">https://help.shodan.io/</a> 
   </td>
  </tr>
  <tr>
   <td>Censys Search
   </td>
   <td>A tool which can observe open ports, running services, TLS certificates, and more for a given IP
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://search.censys.io/">https://search.censys.io/</a> 
   </td>
  </tr>
  <tr>
   <td>DNS Dumpster
   </td>
   <td>A tool used to look up the potential attack surfaces of internet facing services
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://dnsdumpster.com/">https://dnsdumpster.com/</a>
   </td>
  </tr>
  <tr>
   <td>DNS Checker & MX ToolBox
   </td>
   <td>‘Swiss Army Knives’ of DNS and IP lookups - allows various fast searches on domain/DNS, IP, and email records
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://mxtoolbox.com/SuperTool.aspx">Network Tools: DNS,IP,Email (mxtoolbox.com)</a>
<p>
<a href="https://dnschecker.org/all-tools.php">DNS & IP Tools, Developer & Webmaster Tools, Productivity Tools, SEO Tools (dnschecker.org)</a>
   </td>
  </tr>
  <tr>
   <td>How certificate transparency works
   </td>
   <td>A quick introduction to what certificate transparency is, what issues it addresses, and how it functions
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://certificate.transparency.dev/howctworks/">https://certificate.transparency.dev/howctworks/</a> 
   </td>
  </tr>
  <tr>
   <td>Certificates: the OSINT Gift that keeps on giving
   </td>
   <td>A guide for analysts on how to use tools like Shodan to search for certificates and get good data on web servers they are investigating
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td>Text version: <a href="https://www.osintcurio.us/2019/03/12/certificates-the-osint-gift-that-keeps-on-giving/">https://www.osintcurio.us/2019/03/12/certificates-the-osint-gift-that-keeps-on-giving/</a> 
<p>
Video version: <a href="https://www.youtube.com/watch?v=XHltHamQVoA">https://www.youtube.com/watch?v=XHltHamQVoA</a> 
   </td>
  </tr>
  <tr>
   <td>crt.sh
   </td>
   <td>A search engine which focuses specifically on certificate search
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://crt.sh/">https://crt.sh/</a> 
   </td>
  </tr>
  <tr>
   <td>massdns
   </td>
   <td>A tool which can be used to brute force searches for subdomain
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://github.com/blechschmidt/massdns#reconnaissance-by-brute-forcing-subdomains">https://github.com/blechschmidt/massdns#reconnaissance-by-brute-forcing-subdomains</a> 
   </td>
  </tr>
  <tr>
   <td>Advanced Persistent Infrastructure Tracking
   </td>
   <td>A guide on various methods which could be used to track attacker infrastructure, which also looks at certificate searches
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://censys.com/advanced-persistent-infrastructure-tracking/">https://censys.com/advanced-persistent-infrastructure-tracking/</a> 
   </td>
  </tr>
</table>

## Practice

Choose a random-ish domain name, making sure that it is not hosted behind a content distribution/reverse-proxy service such as Cloudflare (you can figure it out by quickly searching for it using a tool such as dig and using the NS option to look for name servers). Using the above tool categories, investigate the domain and try to explain:

- Where is the domain registered, and if available, who registered the domain?
- What is the domain’s IP address?
- Who manages that IP address?
- Where is that server located?
- (If practitioners have access to Shodan or Censys) What services are running on that server?
- What other domains are hosted at the same IP?
- Can you find any sub-domains for that domain?

## Skill Check

Sit down with a peer or a mentor who has significant experience in passive investigation against servers on the internet. Then:

- Complete the [passive reconnaissance room](https://tryhackme.com/room/passiverecon) on TryHackMe.
- Carry out the above Practice Exercises, ideally on a different domain, and go through your process and findings with your peer or mentor. Have them review your work and provide feedback on both the process and results. It might be a good exercise to discuss specifically how to find subdomains running on that domain and to discuss the accuracy of geoIP lookups concerning those domains. As an optional extra, sit down with the mentor or peer to run through some advanced dig settings and set up a basic automation together, for example asking dig to load a list of domains from a text file and provide information on them.
- If you have a real-world phishing message (or alternatively, take a phishing domain from [PhishTank](https://phishtank.org/) and analyze that, note that the website collects domains rather than messages), carry out the passive investigation outlined in the practice exercise (carefully!) while conferring with a peer or mentor. Document your findings and your process. Have them review your work and provide feedback on both the process and results.
