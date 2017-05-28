// TODO temp solution
exec("psql -f tempScripts.sql" + process.env.DATABASE_URL);