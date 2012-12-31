---
comments: true
date: 2011-07-29 11:23:04
layout: post
slug: una-buena-idea
title: Una buena idea
wordpress_id: 343
categories:
- Herramientas
tags:
- control de versiones
- dropbox
- git
---

[GIT](http://git-scm.com/) es una gran herramienta de [control de versiones distribuido](http://www.lnds.net/blog/2010/07/control-de-versiones-distribuido.html), podemos trabajar en la casa y en la oficina y sincronizar nuestros repositorios de código fuente. Pero está siempre el problema de donde alojar un servidor central donde colocar nuestro repositorio.

[GitHub](http://www.github.com) permite arrendar espacio en sus servidores para alojar nuestros repositorios, y hay otros servicios por ahí. Pero una alternativa bastante ingeniosa es usar [DropBox](http://db.tt/3IdZpmw), alojar nuestros repositorios en la carpeta compartida de [Dropbox](http://db.tt/3IdZpmw), crear repositorios limpios (bare repositories) y hacer git pull/pull localmente sobre esa carpeta compartida. La idea aparece en [este post](http://random-rails.blogspot.com/2009/08/on-version-control.html) (en inglés), y es bastante simple y potente.

Supongo que esto también puede servir con otros gestores de control de versiones, como Mercurial o Bzr, pero incluso es una buena idea que se podría aplicar con gestores más tradicionales como Subversion. Si alguien lo implementa con esos sistemas lo invito a comentar y compartir la experiencia.
