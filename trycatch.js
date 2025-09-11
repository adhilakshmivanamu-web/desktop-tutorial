let X=50; 
try {
    p=X+Y;
    p=X*Y;
    console.log('p:',p);
}
catch (err)
{
    console.log('error:',err.message);
}