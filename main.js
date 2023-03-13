let array=[13,3,4,14,3,4,54,6,6,7,7,17,8,54,14,13];
function dublicate(array)
{
	let result=[];
	result1=[];
    for(i=0;i<array.length;i++)
	{
		let exists=false;
        for(j=0;j<result.length;j++)
		{
          if(array[i]===result[j])
			{
              result1.push(array[i]);
              exists=true;
              break;
			}
		} 
		if(!exists)
		{		
		  result.push(array[i])
		}
         
	}
	return result1;
}
console.log(dublicate(array));
