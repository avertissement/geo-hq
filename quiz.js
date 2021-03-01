function ready() {

    
        $('.quiz').on('click', function(e) {
            e.preventDefault();
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

                    <h3>Question 1</h3>
                        <p class="question01">What is the population of Italy?</p>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1">A - ${q1['A.']}</button></li>
                                <li><button class="button2">B - ${q1['B.']}</button></li>
                                <li><button class="button3">C - ${q1['C.']}</button></li>
                                <li><button class="button4">D - ${q1['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit">Submit Answer</button>
                        </form>
                                <button class="restart">Restart</button>
                            </div>

                </div>
                `);


                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    $('.button1').css('background', 'darkred');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button2').css('background', 'darkred');
                    alt2();
                })

                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button3').css('background', 'darkred');
                    alt3();
                })

                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    e.preventDefault();
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
                }

                function alt2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                }

                function alt3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                }

                function alt4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }

                $('.button1').on('mouseenter', function() {
                    $('.button1').css('background', 'green');
                    button1();
                })

                $('.button2').on('mouseenter', function() {
                    $('.button2').css('background', 'green');
                    button2();
                })

                $('.button3').on('mouseenter', function() {
                    $('.button3').css('background', 'green');
                    button3();
                })

                $('.button4').on('mouseenter', function() {
                    $('.button4').css('background', 'green');
                    button4();
                })

                function button1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                }

                function button2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                }

                function button3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                }

                function button4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                }

                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    if($('.button1').attr('style') == 'background: darkred;') {
                        correctAnswer();
                        if(X=0) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                    }
                })

                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/italy')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <h3>That's correct! "A - ${q1['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">Next Question</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
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

                            <h3>That's incorrect. "A - ${q1['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">Next Question</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
                            populateQ2();
                        })
                    }
                }

                $('.restart').on('click', function(){
                    alert("The quiz has restarted.")
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

                    <h3>Question 2</h3>
                        <p class="question02">What broad region is Mexico within?</p>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1">A - ${q2['A.']}</button></li>
                                <li><button class="button2">B - ${q2['B.']}</button></li>
                                <li><button class="button3">C - ${q2['C.']}</button></li>
                                <li><button class="button4">D - ${q2['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit">Submit Answer</button>
                        </form>
                                <button class="restart">Restart</button>
                            </div>

                </div>
                `);
        
                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    $('.button1').css('background', 'darkred');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button2').css('background', 'darkred');
                    alt2();
                })
        
                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button3').css('background', 'darkred');
                    alt3();
                })
        
                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    e.preventDefault();
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
                }
        
                function alt2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                }
        
                function alt3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                }
        
                function alt4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }
        
                $('.button1').on('mouseenter', function() {
                    $('.button1').css('background', 'green');
                    button1();
                })
        
                $('.button2').on('mouseenter', function() {
                    $('.button2').css('background', 'green');
                    button2();
                })
        
                $('.button3').on('mouseenter', function() {
                    $('.button3').css('background', 'green');
                    button3();
                })
        
                $('.button4').on('mouseenter', function() {
                    $('.button4').css('background', 'green');
                    button4();
                })
        
                function button1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                }
        
                function button2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                }
        
                function button3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                }
        
                function button4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    if($('.button1').attr('style') == 'background: darkred;') {
                        correctAnswer();
                        if(X=20) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                    }
                })
        
                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/mexico')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <h3>That's correct! "A - ${q2['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">Next Question</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
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

                            <h3>That's incorrect. "A - ${q2['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">Next Question</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
                            populateQ3();
                        })
                    }
                }
        
                $('.restart').on('click', function(){
                    alert("The quiz has restarted.")
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

                    <h3>Question 3</h3>
                        <p class="question03">What is the timezone of the United Arab Emirates?</p>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1">A - ${q3['A.']}</button></li>
                                <li><button class="button2">B - ${q3['B.']}</button></li>
                                <li><button class="button3">C - ${q3['C.']}</button></li>
                                <li><button class="button4">D - ${q3['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit">Submit Answer</button>
                        </form>
                                <button class="restart">Restart</button>
                            </div>

                </div>
                `);
        
                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    $('.button1').css('background', 'darkred');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button2').css('background', 'darkred');
                    alt2();
                })
        
                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button3').css('background', 'darkred');
                    alt3();
                })
        
                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    e.preventDefault();
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
                }
        
                function alt2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                }
        
                function alt3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                }
        
                function alt4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }
        
                $('.button1').on('mouseenter', function() {
                    $('.button1').css('background', 'green');
                    button1();
                })
        
                $('.button2').on('mouseenter', function() {
                    $('.button2').css('background', 'green');
                    button2();
                })
        
                $('.button3').on('mouseenter', function() {
                    $('.button3').css('background', 'green');
                    button3();
                })
        
                $('.button4').on('mouseenter', function() {
                    $('.button4').css('background', 'green');
                    button4();
                })
        
                function button1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                }
        
                function button2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                }
        
                function button3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                }
        
                function button4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    if($('.button3').attr('style') == 'background: darkred;') {
                        correctAnswer();
                        if(X=40) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                    }
                })
        
                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/uae')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <h3>That's correct! "C - ${q3['C.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">Next Question</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
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

                            <h3>That's incorrect. "C - ${q3['C.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">Next Question</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
                            populateQ4();
                        })
                    }
                }
        
                $('.restart').on('click', function(){
                    alert("The quiz has restarted.")
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

                    <h3>Question 4</h3>
                        <p class="question04">What is the capital of China?</p>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1">A - ${q4['A.']}</button></li>
                                <li><button class="button2">B - ${q4['B.']}</button></li>
                                <li><button class="button3">C - ${q4['C.']}</button></li>
                                <li><button class="button4">D - ${q4['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit">Submit Answer</button>
                        </form>
                                <button class="restart">Restart</button>
                            </div>

                </div>
                `);
        
                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    $('.button1').css('background', 'darkred');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button2').css('background', 'darkred');
                    alt2();
                })
        
                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button3').css('background', 'darkred');
                    alt3();
                })
        
                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    e.preventDefault();
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
                }
        
                function alt2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                }
        
                function alt3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                }
        
                function alt4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }
        
                $('.button1').on('mouseenter', function() {
                    $('.button1').css('background', 'green');
                    button1();
                })
        
                $('.button2').on('mouseenter', function() {
                    $('.button2').css('background', 'green');
                    button2();
                })
        
                $('.button3').on('mouseenter', function() {
                    $('.button3').css('background', 'green');
                    button3();
                })
        
                $('.button4').on('mouseenter', function() {
                    $('.button4').css('background', 'green');
                    button4();
                })
        
                function button1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                }
        
                function button2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                }
        
                function button3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                }
        
                function button4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    if($('.button1').attr('style') == 'background: darkred;') {
                        correctAnswer();
                        if(X=60) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                    }
                })
        
                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/china')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <h3>That's correct! "A - ${q4['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">Next Question</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
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

                            <h3>That's incorrect. "A - ${q4['A.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">Next Question</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
                            populateQ5();
                        })
                    }
                }
        
                $('.restart').on('click', function(){
                    alert("The quiz has restarted.")
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

                    <h3>Question 5</h3>
                        <p class="question05">What is the currency of Russia?</p>
                        <form class="question-form">
                            <ul>
                                <li><button class="button1">A - ${q5['A.']}</button></li>
                                <li><button class="button2">B - ${q5['B.']}</button></li>
                                <li><button class="button3">C - ${q5['C.']}</button></li>
                                <li><button class="button4">D - ${q5['D.']}</button></li>
                            </ul>
                            <div class="end-buttons">
                                <button class="end-of-question" type="submit">Submit Answer</button>
                        </form>
                                <button class="restart">Restart</button>
                            </div>

                </div>
                `);
        
                $('.button1').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    $('.button1').css('background', 'darkred');
                    alt1();
                    })
            
                $('.button2').on('click', function(e) {
                    e.preventDefault();
                    $('.button1').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button2').css('background', 'darkred');
                    alt2();
                })
        
                $('.button3').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    $('.button4').css('background', 'gray');
                    e.preventDefault();
                    $('.button3').css('background', 'darkred');
                    alt3();
                })
        
                $('.button4').on('click', function(e) {
                    e.preventDefault();
                    $('.button2').css('background', 'gray');
                    $('.button3').css('background', 'gray');
                    $('.button1').css('background', 'gray');
                    e.preventDefault();
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
                }
        
                function alt2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'darkred');
                    })
                    $('.button2').on('mouseenter', function() {
                        $('.button2').css('background', 'darkred');
                    })
                }
        
                function alt3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'darkred');
                    })
                    $('.button3').on('mouseenter', function() {
                        $('.button3').css('background', 'darkred');
                    })
                }
        
                function alt4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'darkred');
                    })
                    $('.button4').on('mouseenter', function() {
                        $('.button4').css('background', 'darkred');
                    })
                }
        
                $('.button1').on('mouseenter', function() {
                    $('.button1').css('background', 'green');
                    button1();
                })
        
                $('.button2').on('mouseenter', function() {
                    $('.button2').css('background', 'green');
                    button2();
                })
        
                $('.button3').on('mouseenter', function() {
                    $('.button3').css('background', 'green');
                    button3();
                })
        
                $('.button4').on('mouseenter', function() {
                    $('.button4').css('background', 'green');
                    button4();
                })
        
                function button1() {
                    $('.button1').on('mouseleave', function() {
                        $('.button1').css('background', 'gray');
                    })
                }
        
                function button2() {
                    $('.button2').on('mouseleave', function() {
                        $('.button2').css('background', 'gray');
                    })
                }
        
                function button3() {
                    $('.button3').on('mouseleave', function() {
                        $('.button3').css('background', 'gray');
                    })
                }
        
                function button4() {
                    $('.button4').on('mouseleave', function() {
                        $('.button4').css('background', 'gray');
                    })
                }
        
                $('.question-form').on('submit', function(e) {
                    e.preventDefault();
                    if($('.button3').attr('style') == 'background: darkred;') {
                        correctAnswer();
                        if(X=80) {
                        X+=20;
                        }
                        console.log(X)
                    }
                    else {
                        incorrectAnswer();
                    }
                })
        
                function correctAnswer() {
                    fetch('https://restcountries.eu/rest/v2/name/russia')
                    .then(result => result.json())
                    .then(resultJson => now(resultJson))
                    function now(answer) {
                        $('.quiz-main').html(`
                        <div class="overall-q">

                            <h3>That's correct! "C - ${q5['C.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">End Quiz</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
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

                            <h3>That's incorrect. "C - ${q5['C.']}" is the answer.</h3>
                            <div class="for-move-on"><button class="move-on">End Quiz</button></div>
                            <h4>Quick Stats</h4>
                                <ul class="particular-ul">
                                    <li>Capital: ${answer[0].capital}</li>
                                    <li>Region: ${answer[0].region}</li>
                                    <li>Timezones: ${answer[0].timezones}</li>
                                    <li>Currency: ${answer[0].currencies[0].name}</li>
                                    <li>Language: ${answer[0].languages[0].name}</li>
                                </ul>

                        </div>
                        `)
                        $('.move-on').on('click', function(){
                            last();
                        })
                    }
                }
        
                $('.restart').on('click', function(){
                    alert("The quiz has restarted.")
                    populateQ1();
                })
            }




            function last() {
                $('.quiz-main').html(`
                <div class="overall-q">

                    <h4>Your quiz score was: ${X}/100</h4>
                    <div class="for-restart"><button class="restart">Restart</button></div>

                </div>
                `)
                $('.restart').on('click', function(){
                    alert("The quiz has restarted.");
                    populateQ1()
                })
            }
}


ready()
