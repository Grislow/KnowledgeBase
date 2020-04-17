/*==========================================================================
	ASYNC / AWAIT
	-designed to consume promises (as a developer you will usually be consuming them anyway)
	-async function ... -> states that the function will be asynchronous
	-await (Promise) -> expression, states that execution should be stopped until the promise is fulfilled
		-result is the resolved value of the promise
		-an async function can have multiple await expressions
		-can only be used within an async function
==========================================================================*/

const getIDs = new Promise((resolve, reject) => { //Not defined as a function because no data is passed
	setTimeout(() => {
		resolve([523, 883, 432, 974]); //marks promise as resolved
		reject("Would execute if resolve() was omitted");
	}, 2000);
});

const getRecipe = recID => {	//Defined as function because recID needs to be passed as argument
	return new Promise((resolve, reject) => {
		setTimeout(ID => {
			const recipe = {title: 'Carrot Soup', publisher: 'Greg'};
			resolve(`${ID}: ${recipe.title}`)
		}, 1500, recID);
	});
};

const getRelated = publisher => {
	return new Promise((resolve, reject) => {
		setTimeout(pub => {
			const recipe = {title: 'Smoked Salmon', publisher: 'Greg'};
			resolve(`${pub}: ${recipe.title}`);
		}, 1500, publisher)
	});
};

async function getRecipesAW() {
	const IDs = await getIDs;
	console.log(IDs);

	const recipe = await getRecipe(IDs[2]);
	console.log(recipe);

	const relatedRecipe = await getRelated('Greg');
	console.log(relatedRecipe);

	return recipe; 
}

getRecipesAW().then(result => console.log(`${result} is the required recipe`));
//console.log(recipe) -> this will only return the promise body because at the time of execution it will not be fullfilled yet
//	-should use then method on the async call(see above)


/*==========================================================================
	FETCH AND ASYNC/AWAIT
==========================================================================*/
// modular
async function getWeather(woeid){
	const weatherData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);

	return weatherData.json();
}

function weatherResult(parsedData){
	const today = parsedData.consolidated_weather[0];
	const degrees =  String.fromCharCode(176);

	console.log(`Today on ${today.applicable_date} in ${parsedData.title} 
				the highest temperature will be ${today.max_temp.toFixed(0)+degrees}C 
				and the lowest ${today.min_temp.toFixed(0)+degrees}C`
				.replace(/^				/gm, ''));	
}

// concise, with example of try/catch statement
async function getWeatherC(woeid){
	try{
		const weatherData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);

		const data = await weatherData.json();

		const today = data.consolidated_weather[0];
		const degrees =  String.fromCharCode(176);

		console.log(`Today on ${today.applicable_date} in ${data.title} 
					the highest temperature will be ${today.max_temp.toFixed(0)+degrees}C 
					and the lowest ${today.min_temp.toFixed(0)+degrees}C`
					.replace(/^				/gm, ''));	
	} catch(error) {
		alert(error);
	}
}

getWeather(2487956).then(weatherResult);
getWeatherC(44418);

