##Tour of Hero
which is my second try for Angular

##Angular is awesome
First push 

##Adding angular material 2 into hero project for test
Adding Angular material2 and related dependency into project

##Error problem solving "Uncaught Error: Unexpected value 'MatTableDataSource' imported by the module 'AppModule'."
add MatTableModule from @angular/material to @NgModule
remove MatTableDataSource and MatTable from the import of @NgModule. Because in the MatTableModule they are already declared

##future work
Checking whether the  MatTableDataSource and MatTable in  MatTableModule
