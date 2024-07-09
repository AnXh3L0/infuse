---
style: module
title: "Réponse : réduction de l'infrastructure"
description: Ici, nous abordons la signalisation d'abus ainsi que d'autres
  mécanismes de navigation sécurisée et de sinkhole. Cela inclut le contact avec
  le fournisseur d'infrastructure pour signaler une infrastructure malveillante
  afin qu'elle puisse être démantelée.
weight: 9
---
Cas d'utilisation

## Cas d'utilisation

Dans les sous-thèmes précédents, nous avons examiné comment vous pouvez identifier l'infrastructure qui sert le contenu malveillant, qu'il s’agisse de spam, de logiciels malveillants ou d'hameçonnage. Une fois que vous avez réussi, il est temps d'en avertir les autres. Dans ce sous-thème, nous abordons les **signalements d'abus et d'autres mécanismes de navigation sûre et de sinkhole**. Cela consiste notamment à contacter le fournisseur d'infrastructure pour signaler une infrastructure malveillante afin qu'il puisse la retirer.

Associez cet effort à des activités plus vastes de réponse aux incidents, y compris le partage des menaces et la prise de contact avec les communautés qui pourraient également avoir été ciblées par les attaques provenant de la même infrastructure.

## Objectifs

Après avoir terminé ce sous-thème, les participants devraient être en mesure de faire ce qui suit :

- Avoir une compréhension de base du fonctionnement des bases de données et des rapports sur les abus ;
- Identifier les bases de données d'abus qui répertorient les URL et les domaines soupçonnés d'être malveillants ;
- Demander des données et vous adresser à ces bases de données ;
- Identifier et utiliser des mécanismes de signalement des abus chez les plus grands fournisseurs d'infrastructures.

---

## Signalement d'abus chez les fournisseurs de services d'hébergement

De nombreuses instances d'infrastructures malveillantes s'exécutent sur les principaux fournisseurs de services commerciaux soucieux de maintenir la sécurité, la stabilité, la réputation et de lutter contre les cybermenaces. Les fournisseurs de services responsables offrent des mécanismes efficaces de signalement des abus. L'utilisation de ces mécanismes peut entraîner un retrait rapide de l'infrastructure active.

Apprenez comment trouver et utiliser ces mécanismes de signalement des abus. De nombreux mécanismes permettent d'établir des contacts en cas d'abus :

- Les enregistrements WHOIS pour un domaine fourniront une adresse e-mail et un numéro de téléphone de contact en cas d'abus.
- Recherchez le contact en cas d'abus correspondant à une adresse IP donnée sur [RIPEstat](https://stat.ripe.net/app/launchpad).
- Pour un utilitaire de programmation, consultez la page [Prise](https://docs.abusix.com/abuse-contact-db/5BScLdS3SxHV1giQYpXpKm/getting-started/rGzH6UQZpzjXBhqtjNqRee) [en main](https://docs.abusix.com/abuse-contact-db/5BScLdS3SxHV1giQYpXpKm/getting-started/rGzH6UQZpzjXBhqtjNqRee) de la base de données Abusix Abuse Contacts qui explique comment utiliser un utilitaire Python ou une simple recherche d'hôte pour obtenir les contacts en cas d'abus.
- Utilisez la recherche sur le Web pour obtenir des détails de signalement d'abus pour d'autres types de fournisseurs de services qui peuvent ne pas être disponibles via les méthodes ci-dessus, tels que les abus sur des plateformes comme [Twilio](https://www.twilio.com/help/abuse) et [Mailchimp](https://mailchimp.com/contact/abuse/).

N'oubliez pas qu'il peut y avoir plusieurs fournisseurs de services impliqués. Par exemple, une page de destination d'hameçonnage peut être signalée à la fois au fournisseur d'hébergement Web et au registraire de domaine.

Apprenez à rédiger un rapport d'abus avec les informations techniques que vous avez recueillies. Votre rapport doit inclure suffisamment de détails pour que le fournisseur de services puisse identifier le compte spécifique sur sa plateforme qui diffuse du contenu malveillant. Cela peut inclure les éléments suivants :

- URL du contenu
- IP de l'hôte
- Tout autre identifiant pertinent au service
- Toutes les archives/tous les instantanés pris à partir du contenu
- Captures d'écran
- En-têtes d'e-mails, le cas échéant
- Analyses de sécurité positives ou indicateurs de menaces
- Comment le service/la ressource est utilisée abusivement

Lorsque vous fournissez des captures d'écran ou des pièces jointes, assurez-vous de ne pas compromettre les informations sensibles vous concernant ou concernant vos clients qui sont ciblés par le contenu malveillant.

Bien qu'il soit peu probable que les fournisseurs de services offrent des informations supplémentaires sur le compte d'utilisateur perpétrant un contenu abusif, vous pouvez tenter de demander ces informations au cas où elles seraient utiles à vos enquêtes.

Dans certains cas, les entreprises de services Internet et de technologie font un effort particulier pour se coordonner avec la société civile contre les attaques ciblées et peuvent offrir une assistance supplémentaire. Il peut être utile de travailler avec une organisation [membre de CiviCERT](https://www.civicert.org) pour rechercher un contact de l'entreprise à des fins d'enquêtes et d'intervention rapide accélérée.

Notez que dans de nombreux cas, l'infrastructure malveillante est hébergée sur des comptes ou des serveurs compromis de parties non liées à l'attaque (p. ex., un compte Google compromis, un site Web piraté ou un appareil infecté coordonné dans un botnet).

Si vous cherchez de l'inspiration sur la façon d'écrire un message électronique à un fournisseur d'infrastructure, consultez les modèles suivants créés par la ligne d'assistance Access Now :

- Modèle d'-email [à un registraire d'un domaine malveillant](https://accessnowhelpline.gitlab.io/community-documentation/259-Disable_Malicious_Server_registrar.html)
- Modèle d'e-mail [à un fournisseur d'hébergement](https://accessnowhelpline.gitlab.io/community-documentation/260-Disable_Malicious_Server_hosting_provider.html)
- Modèle d'e-mail [à un client](https://accessnowhelpline.gitlab.io/community-documentation/261-Disable_Malicious_Server_client.html), pour lui demander la permission de partager les IoC avec la communauté

## Navigation sécurisée, sinkholes et listes de blocage

En plus de contacter les contacts en cas d'abus pour demander la suppression de contenu, il existe divers mécanismes permettant que l'infrastructure malveillante ou d'autres indicateurs malveillants soient ajoutés aux listes de blocage et aux bases de données qui sont intégrées dans des outils et des services largement utilisés.

Le même principe s'applique aux réseaux sociaux et aux plateformes de messagerie, et ils s'appuient sur les procédures de signalement d'abus ou de contenu sur ces plateformes (ou sur des services de sécurité complémentaires).

Renseignez-vous sur certaines de ces listes de blocage, sur l'endroit où elles sont intégrées et sur la façon de leur envoyer un rapport, notamment :

- [Google Safe Browsing](https://safebrowsing.google.com/safebrowsing/report_general/)
- [PhishTank](https://phishtank.org/)
- [Abuse IP DB](https://www.abuseipdb.com/)
- [Phishing Database](https://github.com/mitchellkrogza/Phishing.Database#additions)(envoyer des ajouts via GitHub)
- Des bases de données de signalement et de menaces plus spécifiques sont proposées par [abuse.ch](https://abuse.ch) et nécessitent une authentification pour soumettre de nouvelles informations, telles que [URLhaus](https://urlhaus.abuse.ch/), [ThreatFox](https://threatfox.abuse.ch/) et [SSL Blacklist](https://sslbl.abuse.ch/).
- Signalez Discord Phishing à [phish.gg](https://docs.phish.gg/) (ou ajoutez un serveur à leur service).

## Pratique

- Trouvez les contacts en cas d'abus pour 3 sociétés d'hébergement Web, y compris au moins une plateforme majeure comme AWS, GCP, Azure, Oracle Cloud et Alibaba Cloud. Recherchez toute information supplémentaire qu'ils offrent sur leur processus de signalement des abus.
- Étudiez le fonctionnement des bases de données d'abus et de Google Safe Browsing. Répertorie plusieurs outils et services avec lesquels ils sont intégrés.
- Créez votre propre organigramme de réponse aux incidents et votre liste de contrôle contenant les liens pertinents et les actions à prendre en cas d'incident d'infrastructure en ligne malveillante.

## Contrôle de compétence

Travaillez avec un mentor ou un pair qui a une certaine expérience dans la suppression d'infrastructures malveillantes. Effectuez les tâches suivantes avec son aide :

- Préparez toutes les preuves (adresses IP, hachages, domaines et toute autre preuve) dont vous auriez besoin pour soumettre un rapport d'abus. Si vous avez un exemple d'infrastructure malveillante à portée de main, recueillez ces preuves concernant cette infrastructure. Si ce n'est pas le cas, recueillez les preuves à partir d'une page Web légitime (sans soumettre un rapport d'abus, bien sûr). Discutez des preuves avec votre pair ou votre mentor, qui vérifiera que vous avez recueilli les bonnes preuves et que vous les avez correctement documentées.
- Expliquez comment la navigation sécurisée, la base de données d'abus et les fournisseurs de listes de blocage fonctionnent. Si vous avez un exemple d'infrastructure malveillante sous la main, envoyez-le à une base de données ou à un fournisseur. Si ce n'est pas le cas, rendez-vous sur la page Web du fournisseur et faites un essai du processus de soumission avec votre pair ou votre mentor (expliquez les informations que vous prépareriez, sans les soumettre).
- Demandez à votre mentor ou à votre pair de lister trois fournisseurs d'hébergement Web, fournisseurs de services cloud, registraires de domaines ou autres fournisseurs de services. Pour chacun d'eux, trouvez le mécanisme de contact ou de signalement d'abus pertinent.
- Parlez à votre mentor ou à votre pair des risques stratégiques et personnels liés au retrait, à la divulgation éventuelle des données du client et à l'indication à un cybercriminel que son attaque fait l'objet d'un examen critique. Faites un projet de jeu de rôle dans lequel vous communiquez ces considérations à la cible de l'attaque.

## Ressources d'apprentissage

{{% resource title="RIPEstat launchpad" languages="English, Spanish, Arabic, Russian, French, Farsi, Italian, Turkish" cost="Free" description="A service which allows you to search for and list relevant abuse reporting mechanisms." url="https://stat.ripe.net/app/launchpad" %}}

{{% resource title="Getting Started - Abusix" languages="English" cost="Free" description="A getting started guide to the Abuse Contact DB." url="https://docs.abusix.com/abuse-contact-db/5BScLdS3SxHV1giQYpXpKm/getting-started/rGzH6UQZpzjXBhqtjNqRee" %}}

{{% resource title="Twilio abuse reports" languages="English" cost="Free" description="You can report unwanted phone calls or SMS messages from phone numbers hosted on Twilio here." url="https://www.twilio.com/en-us/help/abuse" %}}

{{% resource title="Mailchimp abuse reports" languages="English" cost="Free" description="You can report any abuse that takes place on Mailchimp’s platform here." url="https://mailchimp.com/contact/abuse/" %}}

{{% resource title="CiviCERT" languages="English" cost="Free" description="A network of security professionals who help civil society address cybersecurity issues." url="https://www.civicert.org/" %}}

{{% resource title="Templates of emails we could send to report malicious activity" languages="English" cost="Free" description="Three email templates that allow you to easily craft an email to a domain registrar, hosting provider, or client to inform them about the presence of malicious infrastructure. Registrar: [Link](https://accessnowhelpline.gitlab.io/community-documentation/259-Disable_Malicious_Server_registrar.html), Hosting provider: [Link](https://accessnowhelpline.gitlab.io/community-documentation/260-Disable_Malicious_Server_hosting_provider.html), Client: [Link](https://accessnowhelpline.gitlab.io/community-documentation/261-Disable_Malicious_Server_client.html)" %}}

{{% resource title="Send a SafeBrowsing report" languages="English" cost="Free" description="Here you can send SafeBrowsing reports to a Google-maintained database which reaches a huge amount of users." url="https://safebrowsing.google.com/safebrowsing/report_general/" %}}

{{% resource title="PhishTank" languages="English" cost="Free" description="A collaborative list of phishing site submissions, allows users to search for and submit URLs." url="https://phishtank.org/" %}}

{{% resource title="AbusiveIP" languages="English" cost="Free" description="Allows users to both search for and report IP addresses linked to malicious behavior." url="https://www.abuseipdb.com/" %}}

{{% resource title="Phishing Database" languages="English" cost="Free" description="One more crowdsourced database of suspected phishing domains and links." url="https://github.com/mitchellkrogza/Phishing.Database#additions" %}}

{{% resource title="Abuse ch" languages="English" cost="Free" description="A community-driven platform focusing on threat intelligence regarding malware and botnets." url="https://abuse.ch/" %}}

{{% resource title="Phish.gg documentation" languages="English" cost="Free" description="A service where you can report phishing on services such as Discord." url="https://docs.phish.gg/docs/get-started/welcome/" %}}

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
