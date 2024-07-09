---
style: module
title: Documentation des constatations
description: Ce module vous apprend à rédiger et à partager les résultats de
  votre enquête en incluant des indicateurs de compromission (IoC) appropriés.
weight: 8
---

## Cas d'utilisation

Il peut y avoir plusieurs raisons pour lesquelles les organisations de la société civile ne communiquent pas leurs conclusions. Elles pourraient manquer de temps pour le faire, elles pourraient être préoccupées par le partage d'échantillons de logiciels malveillants ou d'indicateurs de failles, ou elles pourraient simplement manquer d'expertise sur la façon de documenter de manière responsable les conclusions d'une enquête sur les logiciels malveillants. Ce sous-thème aborde le dernier point.

Avant de terminer ce sous-thème, assurez-vous d'avoir bien lu et compris les deux articles (par Amnesty/HRW et Bellingcat) décrits dans le sous-thème 7.

## Objectifs

Après avoir terminé ce sous-thème, les participants devraient être en mesure de faire ce qui suit :

- Rédiger un bref résumé au sujet d'une enquête
- Sélectionner les indicateurs appropriés de faille et les partager de manière responsable
- Comprendre la meilleure façon de diffuser les conclusions d'un article

---

Lorsque vous enquêtez sur l'infrastructure malveillante associée à une campagne d'hameçonnage ou à une autre menace, il est impératif de prendre des notes détaillées. Vous pouvez oublier les petits détails qui s'avèrent importants. De plus, les auteurs des menaces sont susceptibles de modifier leur infrastructure (p. ex., désactiver les serveurs) pendant votre enquête ! Par conséquent, vous devriez prendre des notes sur ce que vous faites et ce que vous découvrez. Incluez toutes les informations que vous collectez, y compris les résultats de requêtes DNS/whois, les e-mails et les pages Web des cybercriminels (source complète et captures d'écran), etc. Le format exact de ces notes n'est pas important, mais celles-ci devraient être complètes.

Au fur et à mesure que votre enquête avance, vous devriez commencer à tenir davantage de notes d'analyse distillées afin d'assurer le suivi de vos conclusions importantes. Vous pouvez également les documenter dans vos notes détaillées, mais il est également bon de les suivre séparément, car vos notes détaillées risquent de devenir très longues et encombrantes. Vos notes de conclusions importantes devraient contenir vos conclusions sur les divers éléments de l'infrastructure et les liens qui les relient. Pensez-y en prenant en compte les éléments importants que vous voudrez probablement conserver dans votre rapport final. Comme pour vos notes non filtrées, le format de ces notes n'est pas significatif, mais beaucoup d'analystes aiment utiliser [Maltego](https://www.maltego.com/) pour documenter les connexions.

Enfin, une fois votre enquête terminée, il est temps de rédiger votre rapport.

Le rapport devrait contenir un compte rendu factuel de ce qui s'est passé et de l'infrastructure utilisée, ainsi que vos impressions et conclusions. Généralement, cette enquête sera déclenchée par une sorte d'attaque d'ingénierie sociale (par e-mail, SMS, WhatsApp, etc.). Dans ce cas, vous voudrez noter toutes les conclusions que vous avez faites sur la nature de l'attaque. Quelle en est la cible ? Si possible, pouvez-vous identifier d'autres personnes qui ont reçu le message ? Quelles techniques le cybercriminel a-t-il utilisées pour tromper la personne ciblée ?

Selon le public, vous pouvez également noter les actions de la personne ciblée et les conclusions que vous avez tirées sur la connaissance de la situation par le cybercriminel. La personne ciblée a-t-elle suivi des liens, saisi des informations sensibles sur des sites Web contrôlés par les cybercriminels, téléchargé des pièces jointes, ouvert des pièces jointes, etc. ? Quelle est la probabilité que vos actions et celles de la personne ciblée aient été suivies ? Notez que si la victime a saisi des informations d'identification ou ouvert un logiciel malveillant, un effort d'enquête et de correction plus approfondi (en dehors de la portée de ce parcours d'apprentissage) est justifié.

Une fois que vous avez créé un rapport et que vous l'avez partagé avec votre client (le cas échéant), vous pouvez l'utiliser pour :

- Le partager avec vos collègues défenseurs numériques de la société civile
- Le publier dans le domaine public

Vous pouvez également faire les deux. Si vous travaillez avec un client dont l'appareil a été compromis, vous devez bien sûr vous assurer qu'il est d'accord avec le partage du rapport. Mieux vaut obtenir son approbation écrite.

Si vous êtes membre d'une organisation comme [CiviCERT](https://www.civicert.org/), c'est un excellent endroit pour partager vos conclusions. Les autres membres pourront ainsi lire votre rapport, fournir des commentaires et prendre des mesures.

Vous pouvez également publier vos résultats sur un blog ou sur un autre site comme GitHub. Cela demande peu d'efforts, mais peut aussi être limité dans son impact. Cependant, votre rapport peut être précieux pour quelqu'un qui enquête sur un ensemble similaire d'infrastructures.

## Contrôle de compétence

Prenez l'un des e-mails d'hameçonnage ou des e-mails malveillants ciblés dont vous avez parlé dans le sous-thème 2 ou un domaine que vous avez trouvé sur [PhishTank](https://phishtank.org/) (faites attention lorsque vous analysez ce dernier, supposez que tous les domaines répertoriés sont malveillants). Vous pouvez également utiliser un e-mail ou un domaine que vous avez analysé dans un sous-thème précédent. Imaginez et planifiez à quoi ressemblerait un rapport décrivant la campagne plus large derrière ces e-mails. Puisque le rapport ne sera partagé avec personne, n'hésitez pas à inventer quelques détails. Ensuite, écrivez quelques notes qui résumeraient/décriraient ce rapport.

Si vous travaillez avec un pair ou un mentor, discutez-en avec lui. Il devrait vérifier certaines choses :

- Les notes décrivent-elles avec précision le type d'attaque ?
- Le rapport contient-il et présente-t-il des informations d'une manière qui pourrait être utile à d'autres intervenants dans l'espace de la société civile, par exemple en incluant des indicateurs de failles (IoC) ?
- Le rapport résume-t-il ses conclusions de manière responsable, par exemple en neutralisant des URL et en caviardant les données sensibles concernant les personnes ciblées ?


## Ressources d'apprentissage

{{% resource title="Maltego" languages="English" cost="There is a community version free for non-commercial use, Pro versions cost 999 USD a year" description="Maltego can be used for visual representation of findings and make it easier to identify connections between different indicators." url="https://www.maltego.com/" %}}

{{% resource title="Guccifer Rising? Months-Long Phishing Campaign on ProtonMail Targets Dozens of Russia-Focused Journalists and NGOs" languages="English" cost="Free" description="This is a very thorough report on a major phishing campaign. Don’t feel the need to make yours this complete, but feel free to take inspiration from it." url="https://www.bellingcat.com/news/uk-and-europe/2019/08/10/guccifer-rising-months-long-phishing-campaign-on-protonmail-targets-dozens-of-russia-focused-journalists-and-ngos/" %}}

{{% resource title="Iran: State-Backed Hacking of Activists, Journalists, Politicians" languages="English" cost="Free" description="Another great write-up and a summary of an investigation. Once again, yours will likely be less thorough but this one is a great example." url="https://www.hrw.org/news/2022/12/05/iran-state-backed-hacking-activists-journalists-politicians" %}}


