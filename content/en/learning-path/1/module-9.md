+++
style = "module"
weight = 9
title = "Response - Infrastructure takedown"
description = "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."
+++

## Use Case

In the previous sub-topics, we looked at how you can identify infrastructure that serves malicious content, be it spam, malware, or phishing. Once you have successfully done so, it’s time to warn others about it. In this subtopic, we cover **abuse-reporting and other safe browsing and sinkhole mechanisms**. This includes contacting the infrastructure provider to report malicious infrastructure so that it can be taken down.

Pair this effort with broader incident response activities including threat sharing and reaching out to communities which may have also been targeted by the attacks originating from the same infrastructure.

## Objectives

After completing this subtopic, practitioners should be able to do the following:

- Have a basic understanding of how abuse reporting and databases work;
- Identify abuse databases which list URLs and domains suspected of being malicious;
- Request data from and write to such databases;
- Identify and use abuse reporting mechanisms at bigger infrastructure providers.

---

## Abuse Reporting at hosting service providers

Many instances of malicious infrastructure run on mainstream commercial service providers concerned with maintaining their system safety, stability, reputation, and tackling cyber threats. Responsible service providers offer effective abuse reporting mechanisms. Utilizing these mechanisms may lead to a prompt takedown of active infrastructure.

Learn how to locate and utilize these abuse reporting mechanisms. Abuse contacts are available through numerous mechanisms:

- WHOIS records for a domain will provide an Abuse contact email and phone number.
- Search for the abuse contact relevant to a given IP at [RIPEstat](https://stat.ripe.net/app/launchpad).
- For a programmatic utility, see the Abusix Abuse Contacts Database’s [Getting Started](https://docs.abusix.com/abuse-contact-db/5BScLdS3SxHV1giQYpXpKm/getting-started/rGzH6UQZpzjXBhqtjNqRee) page which explains how to use a Python utility or a simple host lookup to obtain abuse contacts.
- Use web search to obtain abuse reporting details for other types of service providers which may not be available through the above methods, such as abuse on platforms such as [Twilio ](https://www.twilio.com/help/abuse)and [Mailchimp](https://mailchimp.com/contact/abuse/).

Remember there may be multiple service providers involved. For instance, a phishing landing page can be reported both to the web hosting provider and to the domain registrar.

Learn how to write an abuse report with the technical information you have collected. Your report should include sufficient details so that the service provider can identify what specific account on their platform is serving malicious content. This may include the following:

- URLs of the content
- IPs of the hosted
- Any other identifier relevant to the service
- Any archives/snapshots taken of the content
- Screenshots
- Email headers, if relevant
- Positive security scans or indicators of threats
- How the service/resource is being abused

While providing screenshots or attachments, ensure you are not compromising sensitive information from yourself or your clients being targeted by the malicious content.

While it is unlikely that service providers will offer additional information on the user account perpetrating abusive content, you may attempt to request such information in case it is helpful to your investigations.

In some cases, internet service and technology companies make a special effort to coordinate with civil society on targeted attacks and may offer additional support. It may be worth working with a [CiviCERT member](https://www.civicert.org) organization to seek a company contact for purposes of investigations and expedited rapid response.

Note that in many cases malicious infrastructure is hosted on compromised accounts or servers of parties unrelated to the attack (e.g. a compromised Google account, a hacked website, or an infected device coordinated in a botnet).

If you are looking for inspiration on how to write an email message to an infrastructure provider, check out the following templates created by the Access Now Helpline:

- Email template [to a registrar of a malicious domain](https://accessnowhelpline.gitlab.io/community-documentation/259-Disable_Malicious_Server_registrar.html)
- Email template [to a hosting provider](https://accessnowhelpline.gitlab.io/community-documentation/260-Disable_Malicious_Server_hosting_provider.html)
- Email template [to a client](https://accessnowhelpline.gitlab.io/community-documentation/261-Disable_Malicious_Server_client.html), asking them for permission to share IoCs with the community

## Safe Browsing, sinkholes, and blocklists

In addition to reaching out to abuse contacts for content takedown, there exists various mechanisms to have malicious infrastructure or other malicious indicators be added to blocklists and databases which are integrated in widely utilized tools and services.

The same principle applies to social media and messaging platforms, and they rely on the abuse or content reporting procedures on those platforms (or complementary safety services).

Learn about some of these blocklists, where they are integrated, and how to report to them, such as:

- [Google Safe Browsing](https://safebrowsing.google.com/safebrowsing/report_general/)
- [PhishTank](https://phishtank.org/)
- [Abuse IP DB](https://www.abuseipdb.com/)
- [Phishing Database](https://github.com/mitchellkrogza/Phishing.Database#additions) (Send additions through GitHub)
- More specific reporting and threat databases are offered by [abuse.ch](https://abuse.ch) and require authentication in order to submit, such as [URLhaus](https://urlhaus.abuse.ch/), [ThreatFox](https://threatfox.abuse.ch/), and [SSL Blacklist](https://sslbl.abuse.ch/).
- Report Discord Phishing to [phish.gg ](https://docs.phish.gg/)(or add a server to their service).

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
   <td>RIPEstat launchpad
   </td>
   <td>A service which allows you to search for and list relevant abuse reporting mechanisms
   </td>
   <td>English, Spanish, Arabic, Russian, French, Farsi, Italian, Turkish
   </td>
   <td>Free
   </td>
   <td><a href="https://stat.ripe.net/app/launchpad">https://stat.ripe.net/app/launchpad</a> 
   </td>
  </tr>
  <tr>
   <td>Getting Started - Abusix
   </td>
   <td>A getting started guide to the Abuse Contact DB
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://docs.abusix.com/abuse-contact-db/5BScLdS3SxHV1giQYpXpKm/getting-started/rGzH6UQZpzjXBhqtjNqRee">https://docs.abusix.com/abuse-contact-db/5BScLdS3SxHV1giQYpXpKm/getting-started/rGzH6UQZpzjXBhqtjNqRee</a> 
   </td>
  </tr>
  <tr>
   <td>Twilio abuse reports
   </td>
   <td>You can report unwanted phone calls or SMS messages from phone numbers hosted on Twilio here.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.twilio.com/en-us/help/abuse">https://www.twilio.com/en-us/help/abuse</a> 
   </td>
  </tr>
  <tr>
   <td>Mailchimp abuse reports
   </td>
   <td>You can report any abuse that takes place on Mailchimp’s platform here.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://mailchimp.com/contact/abuse/">https://mailchimp.com/contact/abuse/</a> 
   </td>
  </tr>
  <tr>
   <td>CiviCERT
   </td>
   <td>A network of security professionals who help civil society address cybersecurity issues
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.civicert.org/">https://www.civicert.org/</a> 
   </td>
  </tr>
  <tr>
   <td>Templates of emails we could send to report malicious activity
   </td>
   <td>Three email templates that allow you to easily craft an email to a domain registrar, hosting provider, or client to inform them about the presence of malicious infrastructure
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td>Registrar: <a href="https://accessnowhelpline.gitlab.io/community-documentation/259-Disable_Malicious_Server_registrar.html">https://accessnowhelpline.gitlab.io/community-documentation/259-Disable_Malicious_Server_registrar.html</a>
<p>
Hosting provider: <a href="https://accessnowhelpline.gitlab.io/community-documentation/260-Disable_Malicious_Server_hosting_provider.html">https://accessnowhelpline.gitlab.io/community-documentation/260-Disable_Malicious_Server_hosting_provider.html</a> 
<p>
Client: <a href="https://accessnowhelpline.gitlab.io/community-documentation/261-Disable_Malicious_Server_client.html">https://accessnowhelpline.gitlab.io/community-documentation/261-Disable_Malicious_Server_client.html</a>
   </td>
  </tr>
  <tr>
   <td>Send a SafeBrowsing report
   </td>
   <td>Here you can send SafeBrowsing reports to a Google-maintained database which reaches a huge amount of users.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://safebrowsing.google.com/safebrowsing/report_general/">https://safebrowsing.google.com/safebrowsing/report_general/</a> 
   </td>
  </tr>
  <tr>
   <td>PhishTank
   </td>
   <td>A collaborative list of phishing site submissions, allows users to search for and submit URLs
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://phishtank.org/">https://phishtank.org/</a> 
   </td>
  </tr>
  <tr>
   <td>AbusiveIP
   </td>
   <td>Allows users to both search for an report IP addresses linked to malicious behavior
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.abuseipdb.com/">https://www.abuseipdb.com/</a> 
   </td>
  </tr>
  <tr>
   <td>Phishing Database
   </td>
   <td>One more crowdsourced database of suspected phishing domains and links
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://github.com/mitchellkrogza/Phishing.Database#additions">https://github.com/mitchellkrogza/Phishing.Database#additions</a> 
   </td>
  </tr>
  <tr>
   <td>Abuse ch
   </td>
   <td>A community driven platform focusing on threat intelligence regarding malware and botnets
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://abuse.ch/">https://abuse.ch/</a> 
   </td>
  </tr>
  <tr>
   <td>Phish.gg documentation
   </td>
   <td>A service where you can report phishing on services such as Discord
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://docs.phish.gg/docs/get-started/welcome/">https://docs.phish.gg/docs/get-started/welcome/</a> 
   </td>
  </tr>
</table>

## Practice

- Find the abuse contacts for 3 web hosting companies, including at least one major platform (use as AWS, GCP, Azure, Oracle Cloud, and Alibaba Cloud. Look for any additional information they offer on their abuse reporting process.
- Investigate how abuse databases and Google Safe Browsing work. Lists several tools and services that they are integrated with.
- Build your own incident-response flowchart and checklist containing relevant links and actions to take in case of an incident of malicious online infrastructure.

## Skill Check

Work with a mentor or peer who has some experience in taking down malicious infrastructure. Do the following tasks with them:

- Prepare all of the evidence (IP addresses, hashes, domains, and any other evidence) you would need to submit an abuse report. If you have an example of malicious infrastructure at hand, collect that evidence for this infrastructure. If you do not, collect the evidence from a legitimate web page (but without submitting an abuse report, of course). Discuss the evidence with your peer or mentor who will verify that you collected the right evidence and have correctly documented it.
- Explain how safe browsing, abuse database, and blocklist providers work. If you have an example of malicious infrastructure on hand, submit it to such a database or provider. If you do not, go to the provider’s web page and do a dry run of the submission process with your peer or mentor (explain what information you would prepare, without submitting it).
- Ask your mentor or peer to list three web hosting providers, cloud providers, registrars, or other service providers. For each of those, find the relevant abuse contact or reporting mechanism.
- Talk to your mentor or peer about the strategic and personal risks of initiating takedown, potentially disclosing client’s data, and potentially indicating to an attacker that their attack is being critically examined. Do a draft role-play in which you communicate these considerations to the target of the attack.
