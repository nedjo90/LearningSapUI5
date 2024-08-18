# index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"
      data-sap-ui-libs="sap.m"
      data-sap-ui-oninit="module:myapp/xml_views/index"
      data-sap-ui-resourceroots='{
        "myapp/xml_views": "./"
    }'
    ></script>
    <title>XML Views</title>
  </head>
  <body  id="content"></body>
</html>
```


`src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"`
Permet de charger la source du fichier javascript => sap-ui-core.js

`data-sap-ui-libs="sap.m"`
Permet de charger la bibliothèque => sap.m

`  data-sap-ui-resourceroots='{
        "myapp/xml_views": "./"
    }'`

clé : valeur
Définit un espace de nom (namespace) => "myapp/xml_views" mappé au répertoire racine (clé) = "./"
A chaque fois que l'on utilisera "myapp/xml_views" il ira chercher dans le répertoire "./".


`data-sap-ui-oninit="module:myapp/xml_views/index"`

Spécifie le module à éxecuter immédiatement après l'initialisation de SAP UI5
=> on charge index.js qui est situé dans le namespace "myapp/xml_views" lui même indiquant le répertoire "./".


Si l'on veut utiliser un thème on utilise l'attribut:

`data-sap-ui-theme="sap_horizon"`

Pour améliorer les performances, on charge les modules de manière asynchrone grâce à l'attribut:

`data-sap-ui-async="true"`

Pour spécifier la version du framework on utilise l'attribut:

`data-sap-ui-compatVersion="edge"`


`id="sap-ui-bootstrap"`

Pour référencer de manière unique le script dans la page on utilise par convention:

On aura pour base un fichier index.html:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script
      id="sap-ui-bootstrap"
      data-sap-ui-compatVersion="edge"
      data-sap-ui-async="true"
      data-sap-ui-theme="sap_horizon"
      src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"
      data-sap-ui-libs="sap.m"
      data-sap-ui-oninit="module:myapp/xml_views/index"
      data-sap-ui-resourceroots='{
        "myapp/xml_views": "./"
    }'
    ></script>

    <title>XML Views</title>
  </head>
  <body class="sapUiBody" id="content"></body>
</html>
```