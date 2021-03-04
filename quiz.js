function ready() {

    
        $('.quiz').on('click', function(e) {
            e.preventDefault();
            $('.for-button').find('button').attr('aria-pressed', 'true')
            populateQ1();
        })





            let X = 0;
            function populateQ1() {
                const q1 = {
                    'A.': 'Approximately 61 M',
                    'B.': 'Approximately 43 M',
                    'C.': 'Approximately 77 M',
                    'D.': 'Approximately 30 M'
                }

                $('main').html(`
                <div class="overall-q">
                    <div class="fix">
                        <h3 tabindex="0">Question 1</h3>
                        <p class="question01" tabindex="0">What is the population of Italy?</p>
                    </div>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1" aria-pressed="false">A - ${q1['A.']}</button></li>
                                <li><button class="button2" aria-pressed="false">B - ${q1['B.']}</button></li>
                                <li><button class="button3" aria-pressed="false">C - ${q1['C.']}</button></li>
                                <li><button class="button4" aria-pressed="false">D - ${q1['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit" aria-pressed="false">Submit Answer</button>
                        </form>
                                <button class="restart" aria-pressed="false">Restart</button>
                            </div>

                </div>
                `);


                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'true');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'darkred');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'true');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'darkred');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt2();
                })

                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'true');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'darkred');
                    $('.button4').css('background', 'gray');
                    alt3();
                })

                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'true');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'darkred');
                    alt4();
                })

                function alt1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }

                function alt2() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }

                function alt3() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }

                function alt4() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }

                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    $('.end-buttons').find('.end-of-question').attr('aria-pressed', 'true');
                    if($('.button1').attr('aria-pressed') == 'true') {
                        correctAnswer();
                        if(X==0) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                        console.log(X)
                    }
                })

                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/italy')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's correct! "A - ${q1['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">Next Question</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            populateQ2();
                        })
                    }
                }

                function incorrectAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/italy')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's incorrect. "A - ${q1['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">Next Question</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            populateQ2();
                        })
                    }
                }

                $('.restart').on('click', function(){
                    $('.end-buttons').find('.restart').attr('aria-pressed', 'true');
                    alert("The quiz has restarted.");
                    X=0;
                    populateQ1();
                })
            }




            function populateQ2() {
                const q2 = {
                    'A.': 'The Americas',
                    'B.': 'Central America',
                    'C.': 'South America',
                    'D.': 'North America'
                }
        
                $('main').html(`
                <div class="overall-q">
                    <div class="fix">
                        <h3 tabindex="0">Question 2</h3>
                        <p class="question02" tabindex="0">What broad region is Mexico within?</p>
                    </div>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1" aria-pressed="false">A - ${q2['A.']}</button></li>
                                <li><button class="button2" aria-pressed="false">B - ${q2['B.']}</button></li>
                                <li><button class="button3" aria-pressed="false">C - ${q2['C.']}</button></li>
                                <li><button class="button4" aria-pressed="false">D - ${q2['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit" aria-pressed="false">Submit Answer</button>
                        </form>
                                <button class="restart" aria-pressed="false">Restart</button>
                            </div>

                </div>
                `);
        
                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'true');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'darkred');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'true');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'darkred');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt2();
                })
        
                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'true');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'darkred');
                    $('.button4').css('background', 'gray');
                    alt3();
                })
        
                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'true');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'darkred');
                    alt4();
                })
        
                function alt1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt2() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt3() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt4() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }
        
                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    $('.end-buttons').find('.end-of-question').attr('aria-pressed', 'true');
                    if($('.button1').attr('aria-pressed') == 'true') {
                        correctAnswer();
                        if(X==0 || X==20) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                        console.log(X)
                    }
                })
        
                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/mexico')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's correct! "A - ${q2['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">Next Question</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            populateQ3();
                        })
                    }
                }
        
                function incorrectAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/mexico')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's incorrect. "A - ${q2['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">Next Question</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            populateQ3();
                        })
                    }
                }
        
                $('.restart').on('click', function(){
                    $('.end-buttons').find('.restart').attr('aria-pressed', 'true');
                    alert("The quiz has restarted.");
                    X=0;
                    populateQ1();
                })
            }





            function populateQ3() {
                const q3 = {
                    'A.': 'UTC+06',
                    'B.': 'UTC-01',
                    'C.': 'UTC+04',
                    'D.': 'UTC+02'
                }
        
                $('main').html(`
                <div class="overall-q">
                    <div class="fix">
                        <h3 tabindex="0">Question 3</h3>
                        <p class="question03" tabindex="0">What is the timezone of the United Arab Emirates?</p>
                    </div>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1" aria-pressed="false">A - ${q3['A.']}</button></li>
                                <li><button class="button2" aria-pressed="false">B - ${q3['B.']}</button></li>
                                <li><button class="button3" aria-pressed="false">C - ${q3['C.']}</button></li>
                                <li><button class="button4" aria-pressed="false">D - ${q3['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit" aria-pressed="false">Submit Answer</button>
                        </form>
                                <button class="restart" aria-pressed="false">Restart</button>
                            </div>

                </div>
                `);
        
                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'true');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'darkred');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'true');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'darkred');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt2();
                })
        
                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'true');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'darkred');
                    $('.button4').css('background', 'gray');
                    alt3();
                })
        
                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'true');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'darkred');
                    alt4();
                })
        
                function alt1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt2() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt3() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt4() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }
        
                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    $('.end-buttons').find('.end-of-question').attr('aria-pressed', 'true');
                    if($('.button3').attr('aria-pressed') == 'true') {
                        correctAnswer();
                        if(X==0 || X==20 || X==40) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                        console.log(X)
                    }
                })
        
                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/uae')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's correct! "C - ${q3['C.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">Next Question</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            populateQ4();
                        })
                    }
                }
        
                function incorrectAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/uae')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's incorrect. "C - ${q3['C.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">Next Question</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            populateQ4();
                        })
                    }
                }
        
                $('.restart').on('click', function(){
                    $('.end-buttons').find('.restart').attr('aria-pressed', 'true');
                    alert("The quiz has restarted.");
                    X=0;
                    populateQ1();
                })
            }




            function populateQ4() {
                const q4 = {
                    'A.': 'Beijing',
                    'B.': 'Shanghai',
                    'C.': 'Guangzhou',
                    'D.': 'Hong Kong'
                }
        
                $('main').html(`
                <div class="overall-q">
                    <div class="fix">
                        <h3 tabindex="0">Question 4</h3>
                        <p class="question04" tabindex="0">What is the capital of China?</p>
                    </div>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1" aria-pressed="false">A - ${q4['A.']}</button></li>
                                <li><button class="button2" aria-pressed="false">B - ${q4['B.']}</button></li>
                                <li><button class="button3" aria-pressed="false">C - ${q4['C.']}</button></li>
                                <li><button class="button4" aria-pressed="false">D - ${q4['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit" aria-pressed="false">Submit Answer</button>
                        </form>
                                <button class="restart" aria-pressed="false">Restart</button>
                            </div>

                </div>
                `);
        
                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'true');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'darkred');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'true');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'darkred');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt2();
                })
        
                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'true');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'darkred');
                    $('.button4').css('background', 'gray');
                    alt3();
                })
        
                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'true');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'darkred');
                    alt4();
                })
        
                function alt1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt2() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt3() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt4() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }
    
                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    $('.end-buttons').find('.end-of-question').attr('aria-pressed', 'true');
                    if($('.button1').attr('aria-pressed') == 'true') {
                        correctAnswer();
                        if(X==0 || X==20 || X==40 || X==60) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                        console.log(X)
                    }
                })
        
                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/china')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's correct! "A - ${q4['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">Next Question</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            populateQ5();
                        })
                    }
                }
        
                function incorrectAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/china')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's incorrect. "A - ${q4['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">Next Question</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            populateQ5();
                        })
                    }
                }
        
                $('.restart').on('click', function(){
                    $('.end-buttons').find('.restart').attr('aria-pressed', 'true');
                    alert("The quiz has restarted.");
                    X=0;
                    populateQ1();
                })
            }




            function populateQ5() {
                const q5 = {
                    'A.': 'Russian Dollar',
                    'B.': 'Russian Dinar',
                    'C.': 'Russian Ruble',
                    'D.': 'Russian Pound'
                }
        
                $('main').html(`
                <div class="overall-q">
                    <div class="fix">
                        <h3 tabindex="0">Question 5</h3>
                        <p class="question05" tabindex="0">What is the currency of Russia?</p>
                    </div>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1" aria-pressed="false">A - ${q5['A.']}</button></li>
                                <li><button class="button2" aria-pressed="false">B - ${q5['B.']}</button></li>
                                <li><button class="button3" aria-pressed="false">C - ${q5['C.']}</button></li>
                                <li><button class="button4" aria-pressed="false">D - ${q5['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit" aria-pressed="false">Submit Answer</button>
                        </form>
                                <button class="restart" aria-pressed="false">Restart</button>
                            </div>

                </div>
                `);
        
                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'true');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'darkred');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'true');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'darkred');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    alt2();
                })
        
                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'true');
                    $('.button4').attr('aria-pressed', 'false');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'darkred');
                    $('.button4').css('background', 'gray');
                    alt3();
                })
        
                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').attr('aria-pressed', 'false');
                    $('.button2').attr('aria-pressed', 'false');
                    $('.button3').attr('aria-pressed', 'false');
                    $('.button4').attr('aria-pressed', 'true');

                    $('.button1').css('background', 'gray');
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'darkred');
                    alt4();
                })
        
                function alt1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'darkred');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt2() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt3() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                function alt4() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button1').on('mouseenter', function() {
                        $('.button1').css('background', 'gray');
                    })
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'gray');
                    })
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'gray');
                    })
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }
        
                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    $('.end-buttons').find('.end-of-question').attr('aria-pressed', 'true');
                    if($('.button3').attr('aria-pressed') == 'true') {
                        correctAnswer();
                        if(X==0 || X==20 || X==40 || X==60 || X==80) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                        console.log(X)
                    }
                })
        
                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/russia')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's correct! "C - ${q5['C.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">End Quiz</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            last();
                        })
                    }
                }
        
                function incorrectAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/russia')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <div class="fix">
                            <h3 tabindex="0">That's incorrect. "C - ${q5['C.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on" aria-pressed="false">End Quiz</button></div>
                            <h4 tabindex="0">Quick Stats</h4>
                            </div>
                                <ul class="particular-ul">
                                    <li tabindex="0">Capital: ${answer[0].capital}</li>
                                    <li tabindex="0">Region: ${answer[0].region}</li>
                                    <li tabindex="0">Timezones: ${answer[0].timezones}</li>
                                    <li tabindex="0">Currency: ${answer[0].currencies[0].name}</li>
                                    <li tabindex="0">Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `);
                        $('.move-on').on('click', function(){
                            $('.for-move-on').find('button').attr('aria-pressed', 'true');
                            last();
                        })
                    }
                }
        
                $('.restart').on('click', function(){
                    $('.end-buttons').find('.restart').attr('aria-pressed', 'true');
                    alert("The quiz has restarted.");
                    X=0;
                    populateQ1();
                })
            }




            function last() {
                $('.quiz-main').html(`
                <div class="overall-q">
                    <div class="fix">
                    <h4 tabindex="0">Your quiz score was: ${X}/100</h4>
                    </div>
                    <div class="for-restart"><button class="restart" aria-pressed="false">Restart</button></div>

                </div>
                `);
                $('.restart').on('click', function(){
                    $('.for-restart').find('button').attr('aria-pressed', 'true')
                    alert("The quiz has restarted.");
                    X=0;
                    populateQ1();
                })
            }
}


ready()
