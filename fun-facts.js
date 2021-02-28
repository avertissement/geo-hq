function readyNow() {
    $('form').on('submit', function(e){
        e.preventDefault();
        let country = $('#geo').val();
        country = country.toLowerCase();
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then(responseJson => keep(responseJson))
        .catch(error => errorMessage(error))
    })

    function errorMessage(arg) {
        console.log(arg)
        $('.response').html(`
        <h3>Error</h3>
        <h4>
        Please type in a valid country name. If the country's name is more than one word, try referring to the one-part version
        of the name or its abbreviation (i.e., UAE instead of United Arab Emirates or Britain instead of the U.K.). It is also
        possible that the name was misspelled. Otherwise, we may not have access to the given country.
        </h4>
        `)
    }

    function keep(param) {
        $('.response').html(`
        <h2>Results:</h2>
            <ul>
                <li class="o-name"></li>
                <li class="capital"></li>
                <li class="region"></li>
                <li class="subregion"></li>
                <li class="population"></li>
                <li class="timezones">Timezones: </li>
                <li class="currency"></li>
                <li class="language"></li>
                <li class="regional-bloc"></li>
                <li class="n-name"></li>
                <li class="land-area"></li>
            </ul>
        `)

        const oName = param[0].name;
        const capital = param[0].capital;
        const region = param[0].region;
        const subregion = param[0].subregion;
        const population = param[0].population;
        const timezones = param[0].timezones;
        const currency = param[0].currencies[0].name;
        const language = param[0].languages[0].name;
        const regionalBloc = param[0].regionalBlocs;
        const nName = param[0].nativeName;
        const landArea = param[0].area;

        oName1();
        capital1();
        region1();
        subregion1();
        population1();
        timezones1();
        currency1();
        language1();
        regionalBloc1();
        nName1();
        landArea1();

        function oName1() {
            console.log(oName)
            if(oName) {
                return $('.o-name').html(`Official Name: ${oName}`)
            }
            else {
                return $('.o-name').html('N/A')
            }
        }

        function capital1() {
            console.log(capital)
            if(capital) {
                return $('.capital').html(`Capital: ${capital}`)
            }
            else {
                return $('.capital').html('N/A')
            }
        }

        function region1() {
            console.log(region)
            if(region) {
                return $('.region').html(`Region: ${region}`)
            }
            else {
                return $('.region').html('N/A')
            }
        }

        function subregion1() {
            console.log(subregion)
            if(subregion) {
                return $('.subregion').html(`Subregion: ${subregion}`)
            }
            else {
                return $('.subregion').html('N/A')
            }
        }

        function population1() { 
            console.log(population)
            if(population) {
                return $('.population').html(`Population: ${population}`)
            }
            else {
                return $('.population').html('N/A')
            }
        }

        function timezones1() {
            if(timezones) {
                for(let i=0; i<timezones.length; i++) {
                    const currentTimezone = timezones[i];
                    console.log(currentTimezone)
                    $('.timezones').append(`${currentTimezone}`)
                }
            }
            else {
                return $('.timezones').html('N/A')
            }
        }

        function currency1() {
            console.log(currency)
            if(currency) {
                return $('.currency').html(`Currency: ${currency}`)
            }
            else {
                return $('.currency').html('N/A')
            }
        }

        function language1() {
            console.log(language)
            if(language) {
                return $('.language').html(`Language(s): ${language}`)
            }
            else {
                return $('.language').html('N/A')
            }
        }

        function regionalBloc1() {
            console.log(regionalBloc)
            const emptyArr = new Array();
            if(regionalBloc) {
                for(let i=0; i<regionalBloc.length; i++) {
                    return $('.regional-bloc').html(`Regional Bloc: ${regionalBloc[i].name}`)
                }
            }
        }

        function nName1() { 
            console.log(nName)
            if(nName) {
                return $('.n-name').html(`Native Name: ${nName}`)
            }
            else {
                return $('.n-name').html('N/A')
            }
        }

        function landArea1() {
            console.log(landArea)
            if(landArea) {
                return $('.land-area').html(`Land Area: ${landArea} square kilometers`)
            }
            else {
                return $('.land-area').html('N/A')
            }
        }
    }
}

readyNow()
