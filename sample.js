


var candidates=[
	{
        "name": "Aleix Melon",
        "id": "E00245",
        "role": ["Dev", "DBA"],
        "age": 23,
        "doj": "11-12-2019",
        "married": false,
        "address": {
            "street": "32, Laham St.",
            "city": "Innsbruck",
            "country": "Austria"
            },
        "referred-by": "E0012"
	},
    {
        "name": "Bob Washington",
        "id": "E01245",
        "role": ["HR"],
        "age": 43,
        "doj": "10-06-2010",
        "married": true,
        "address": {
            "street": "45, Abraham Lane.",
            "city": "Washington",
            "country": "USA"
            },
        "referred-by": null
	}]

   buildTable(candidates)

   function buildTable(data){
    for(var i=0;i<data.length;i++){
        var row= `<tr>
            <td>${candidates[i].name}</td>
            <td>${candidates[i].id}</td>
            <td>${candidates[i].role}</td>
            <td>${candidates[i].age}</td>
            <td>${candidates[i].doj}</td>
            <td>${candidates[i].married}</td>
            <td>${candidates[i].address.street}, ${candidates[i].address.city}, ${candidates[i].address.country}</td>
            <td>${candidates[i]["referred-by"]}</td>
        </tr>`
        document.getElementById('myTable').innerHTML += row;
}
   }


