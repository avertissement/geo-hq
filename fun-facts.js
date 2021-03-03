function readyNow() {
    $('form').on('submit', function(e){
        e.preventDefault();
        $('.response').css({
            "background-image": "url('web-images/rustic.jpg')",
            "background-position": "100%",
            "padding": "25px 15px"
        });
        $('.last-form').find('button').attr('aria-pressed', 'true');
        let country = $('#geo').val();
        country = country.toLowerCase();
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then(responseJson => keep(responseJson))
        .catch(error => errorMessage(error))
        $('#geo').val('');
    })

    function errorMessage(arg) {
        $('.response').html(`
        <h3 class="error" tabindex="0">ERROR</h3>
        <h4 tabindex="0">
        Please type in a valid country name. If the country's name is more than one word, try referring to the one-part version
        of the name or its abbreviation (i.e., UAE instead of United Arab Emirates or Britain instead of the U.K.). It is also
        possible that the name was misspelled. Otherwise, we may not have access to the given country.
        </h4>
        `);
        buttonReset();
        function buttonReset() {
            $('.last-form').find('button').attr('aria-pressed', 'false');
        }
    }

    function keep(param) {
        $('.response').html(`
        <h2 tabindex="0">RESULTS:</h2>
            <ul class="fun-list">
                <li class="o-name" tabindex="0"></li>
                <li class="capital" tabindex="0"></li>
                <li class="region" tabindex="0"></li>
                <li class="subregion" tabindex="0"></li>
                <li class="population" tabindex="0"></li>
                <li class="timezones" tabindex="0">Timezones: </li>
                <li class="currency" tabindex="0"></li>
                <li class="language" tabindex="0"></li>
                <li class="regional-bloc" tabindex="0"></li>
                <li class="n-name" tabindex="0"></li>
                <li class="land-area" tabindex="0"></li>
            </ul>
        `);

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
        buttonReset();

        function oName1() {
            if(oName) {
                return $('.o-name').html(`Official Name: ${oName}`);
            }
        }

        function capital1() {
            if(capital) {
                return $('.capital').html(`Capital: ${capital}`);
            }
        }

        function region1() {
            if(region) {
                return $('.region').html(`Region: ${region}`);
            }
        }

        function subregion1() {
            if(subregion) {
                return $('.subregion').html(`Subregion: ${subregion}`);
            }
        }

        function population1() { 
            if(population) {
                return $('.population').html(`Population: ${population}`);
            }
        }

        function timezones1() {
            if(timezones) {
                for(let i=0; i<timezones.length; i++) {
                    const currentTimezone = timezones[i];
                    $('.timezones').append(`${currentTimezone} `);
                }
            }
        }

        function currency1() {
            if(currency) {
                return $('.currency').html(`Currency: ${currency}`);
            }
        }

        function language1() {
            if(language) {
                return $('.language').html(`Language(s): ${language}`);
            }
        }

        function regionalBloc1() {
            if(regionalBloc && regionalBloc.length > 0) {
                for(let i=0; i<regionalBloc.length; i++) {
                    return $('.regional-bloc').html(`Regional Bloc: ${regionalBloc[i].name}`);
                }
            }
            else {
                return $('.regional-bloc').html(`Regional Bloc: N/A`);
            } 
        }

        function nName1() { 
            if(nName) {
                return $('.n-name').html(`Native Name: ${nName}`);
            }
        }

        function landArea1() {
            if(landArea) {
                return $('.land-area').html(`Land Area: ${landArea} square kilometers`);
            }
        }

        function buttonReset() {
            $('.last-form').find('button').attr('aria-pressed', 'false');
        }
    }
}





readyNow()
