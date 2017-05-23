# Facelespedia

Download npm
=================
Download node.js
====================
run -> node server.js , node client.js
======================================
home -> index.html
==================
database -> backend/facelespedia.sql,query -> query.js
=======================================================
how to use database -> mysql -u root -p facelespedia < facelespedia.sql
=======================================================================
start database -> sudo mysql -u root -p
=======================================
create mysql database -> CREATE DATABASE facelespedia;
======================================================
use database -> use facelespedia;
=================================
exit database -> exit
=====================
ERROR 1050 (42S01) at line 3: Table '...' already exists
-> uncomment DROP TABLE and comment code sql*
=======================================================================
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)
-> mysql.server start
=======================================================================
EXPORT DATABASE -> mysqldump -u root -p facelespedia > db_backup.sql
=======================================================================
