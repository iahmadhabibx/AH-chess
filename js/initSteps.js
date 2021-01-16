function initialize_pieces() {
    // Setting initial position
    for (let i = 1; i <= 8; i++) {
        // White pawns
        document.getElementById("b" + i).innerHTML = `
        <div class="pawn blacks pawn_black" id="black_pawn${i}" onclick="move_pawn('black_pawn${i}')">
            <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 297 297" xml:space="preserve">
                <g>
                    <path d="M223.333,247h-5.926c2.607-3.811,10.798-18.024-0.727-32.248c-13.334-16.46-39.863-65.748-27.324-98.752h0.977
                        c4.418,0,7.667-3.582,7.667-8v-1c0-4.418-3.249-8-7.667-8h-1.225c10.917-10.466,17.725-25.184,17.725-41.5
                        c0-31.756-25.744-57.5-57.5-57.5s-57.5,25.744-57.5,57.5c0,16.316,6.808,31.034,17.725,41.5h-2.225c-4.418,0-8.333,3.582-8.333,8v1
                        c0,4.418,3.915,8,8.333,8h1.979c12.539,33.004-13.99,82.292-27.324,98.752c-11.524,14.224-3.334,28.437-0.727,32.248h-6.928
                        c-4.418,0-8.333,3.582-8.333,8v18c0,4.418,3.915,8,8.333,8H75v16h148v-16c5,0,8-3.582,8-8v-18C231,250.582,227.751,247,223.333,247
                        z" />
                </g>
            </svg>
        </div>
        `;

        // Black pawns
        document.getElementById("g" + i).innerHTML = `
        <div class="pawn whites pawn_white" id="white_pawn${i}" onclick="move_pawn('white_pawn${i}')">
            <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 297 297" xml:space="preserve">
                <g>
                    <path d="M223.333,247h-5.926c2.607-3.811,10.798-18.024-0.727-32.248c-13.334-16.46-39.863-65.748-27.324-98.752h0.977
                        c4.418,0,7.667-3.582,7.667-8v-1c0-4.418-3.249-8-7.667-8h-1.225c10.917-10.466,17.725-25.184,17.725-41.5
                        c0-31.756-25.744-57.5-57.5-57.5s-57.5,25.744-57.5,57.5c0,16.316,6.808,31.034,17.725,41.5h-2.225c-4.418,0-8.333,3.582-8.333,8v1
                        c0,4.418,3.915,8,8.333,8h1.979c12.539,33.004-13.99,82.292-27.324,98.752c-11.524,14.224-3.334,28.437-0.727,32.248h-6.928
                        c-4.418,0-8.333,3.582-8.333,8v18c0,4.418,3.915,8,8.333,8H75v16h148v-16c5,0,8-3.582,8-8v-18C231,250.582,227.751,247,223.333,247
                        z" />
                </g>
            </svg>
        </div>
        `;
    }

    // Rooks
    document.getElementById("h1").innerHTML = `
    <div class="rok whites" id="white_rok1" onclick="move_rook('white_rok1')">
        <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 298 298" xml:space="preserve">
            <g>
                <path d="M216.923,246.538c3.457-6.556,9.963-22.777-1.666-39.137C200.508,186.65,179.942,125,193.61,83H207V0h-16v17h-16V0h-18v17
                    h-16V0h-17v17h-16V0H91v83h14.057c13.668,42-6.98,103.65-21.73,124.401c-11.629,16.359-5.373,32.706-1.916,39.262
                    C77.347,247.044,74,250.337,74,254.5v18c0,4.418,3.915,8.5,8.333,8.5H83v17h132v-17h1.333c4.418,0,7.667-4.082,7.667-8.5v-18
                    C224,250.338,220.986,246.92,216.923,246.538z" />
            </g>
        </svg>
    </div>
    `;
    document.getElementById("h8").innerHTML = `
    <div class="rok whites" id="white_rok2" onclick="move_rook('white_rok2')">
        <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 298 298" xml:space="preserve">
            <g>
                <path d="M216.923,246.538c3.457-6.556,9.963-22.777-1.666-39.137C200.508,186.65,179.942,125,193.61,83H207V0h-16v17h-16V0h-18v17
                    h-16V0h-17v17h-16V0H91v83h14.057c13.668,42-6.98,103.65-21.73,124.401c-11.629,16.359-5.373,32.706-1.916,39.262
                    C77.347,247.044,74,250.337,74,254.5v18c0,4.418,3.915,8.5,8.333,8.5H83v17h132v-17h1.333c4.418,0,7.667-4.082,7.667-8.5v-18
                    C224,250.338,220.986,246.92,216.923,246.538z" />
            </g>
        </svg>
    </div>
    `;

    document.getElementById("a1").innerHTML = `
    <div class="rok blacks" id="black_rok1" onclick="move_rook('black_rok1')">
        <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 298 298" xml:space="preserve">
            <g>
                <path d="M216.923,246.538c3.457-6.556,9.963-22.777-1.666-39.137C200.508,186.65,179.942,125,193.61,83H207V0h-16v17h-16V0h-18v17
                    h-16V0h-17v17h-16V0H91v83h14.057c13.668,42-6.98,103.65-21.73,124.401c-11.629,16.359-5.373,32.706-1.916,39.262
                    C77.347,247.044,74,250.337,74,254.5v18c0,4.418,3.915,8.5,8.333,8.5H83v17h132v-17h1.333c4.418,0,7.667-4.082,7.667-8.5v-18
                    C224,250.338,220.986,246.92,216.923,246.538z" />
            </g>
        </svg>
    </div>
    `;
    document.getElementById("a8").innerHTML = `
    <div class="rok blacks" id="black_rok2" onclick="move_rook('black_rok2')">
        <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 298 298" xml:space="preserve">
            <g>
                <path d="M216.923,246.538c3.457-6.556,9.963-22.777-1.666-39.137C200.508,186.65,179.942,125,193.61,83H207V0h-16v17h-16V0h-18v17
                    h-16V0h-17v17h-16V0H91v83h14.057c13.668,42-6.98,103.65-21.73,124.401c-11.629,16.359-5.373,32.706-1.916,39.262
                    C77.347,247.044,74,250.337,74,254.5v18c0,4.418,3.915,8.5,8.333,8.5H83v17h132v-17h1.333c4.418,0,7.667-4.082,7.667-8.5v-18
                    C224,250.338,220.986,246.92,216.923,246.538z" />
            </g>
        </svg>
    </div>
    `;


    // Knights
    document.getElementById("h2").innerHTML = `
    <div class="knight whites" id="white_knight1" onclick="move_knight('white_knight1')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 511.997 511.997" xml:space="preserve">
            <g>
                <g>
                    <path d="M439.208,162.493c-42.656-33.504-84.672-66.976-127.168-100.48c-18.432-14.176-27.392-32.192-23.648-55.488
                        c0.64-5.792-2.592-7.744-8.96-5.792c-14.656,4.48-26.752,12.896-33.76,26.432c-9.6,19.328-24.8,26.432-44,25.792
                        c-28.704-1.312-46.496,14.208-61.792,36.16c-16.64,23.296-24.8,50.368-31.168,77.472c-7.008,29.056-10.272,58.144-11.424,87.712
                        c-1.312,22.624-0.64,44.576-1.312,67.072c0,1.312,0,1.984,0,2.624v60h281.632v-45.248c0,0,2.272-19.04-11.808-32.992
                        c-14.08-13.952-29.024-27.008-29.024-27.008c-7.2-5.888-13.76-12.608-19.424-19.936l-51.936-67.2
                        c3.232,2.624,6.368,5.12,9.6,7.744c15.968,12.224,33.12,17.376,52.832,12.224c11.424-2.624,22.976-1.312,33.12,5.12
                        c5.664,3.776,11.936,7.04,18.24,10.304c14.816,7.68,33.056,4.16,43.712-8.64c6.56-7.872,13.12-15.744,19.68-23.488
                        C450.952,184.989,449.416,170.493,439.208,162.493z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M414.312,488.861l-32-64.032c-2.72-5.408-8.256-8.832-14.304-8.832h-256c-6.048,0-11.584,3.424-14.304,8.832l-32,64
                        c-2.496,4.96-2.208,10.848,0.704,15.552c2.912,4.704,8.064,7.616,13.6,7.616h320c5.536,0,10.688-2.88,13.632-7.584
                        C416.552,499.709,416.808,493.821,414.312,488.861z"/>
                </g>
            </g>
        </svg>
    </div>
    `;
    document.getElementById("h7").innerHTML = `
    <div class="knight whites" id="white_knight2" onclick="move_knight('white_knight2')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 511.997 511.997" xml:space="preserve">
            <g>
                <g>
                    <path d="M439.208,162.493c-42.656-33.504-84.672-66.976-127.168-100.48c-18.432-14.176-27.392-32.192-23.648-55.488
                        c0.64-5.792-2.592-7.744-8.96-5.792c-14.656,4.48-26.752,12.896-33.76,26.432c-9.6,19.328-24.8,26.432-44,25.792
                        c-28.704-1.312-46.496,14.208-61.792,36.16c-16.64,23.296-24.8,50.368-31.168,77.472c-7.008,29.056-10.272,58.144-11.424,87.712
                        c-1.312,22.624-0.64,44.576-1.312,67.072c0,1.312,0,1.984,0,2.624v60h281.632v-45.248c0,0,2.272-19.04-11.808-32.992
                        c-14.08-13.952-29.024-27.008-29.024-27.008c-7.2-5.888-13.76-12.608-19.424-19.936l-51.936-67.2
                        c3.232,2.624,6.368,5.12,9.6,7.744c15.968,12.224,33.12,17.376,52.832,12.224c11.424-2.624,22.976-1.312,33.12,5.12
                        c5.664,3.776,11.936,7.04,18.24,10.304c14.816,7.68,33.056,4.16,43.712-8.64c6.56-7.872,13.12-15.744,19.68-23.488
                        C450.952,184.989,449.416,170.493,439.208,162.493z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M414.312,488.861l-32-64.032c-2.72-5.408-8.256-8.832-14.304-8.832h-256c-6.048,0-11.584,3.424-14.304,8.832l-32,64
                        c-2.496,4.96-2.208,10.848,0.704,15.552c2.912,4.704,8.064,7.616,13.6,7.616h320c5.536,0,10.688-2.88,13.632-7.584
                        C416.552,499.709,416.808,493.821,414.312,488.861z"/>
                </g>
            </g>
        </svg>
    </div>
    `;

    document.getElementById("a2").innerHTML = `
    <div class="knight blacks" id="black_knight1" onclick="move_knight('black_knight1')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 511.997 511.997" xml:space="preserve">
            <g>
                <g>
                    <path d="M439.208,162.493c-42.656-33.504-84.672-66.976-127.168-100.48c-18.432-14.176-27.392-32.192-23.648-55.488
                        c0.64-5.792-2.592-7.744-8.96-5.792c-14.656,4.48-26.752,12.896-33.76,26.432c-9.6,19.328-24.8,26.432-44,25.792
                        c-28.704-1.312-46.496,14.208-61.792,36.16c-16.64,23.296-24.8,50.368-31.168,77.472c-7.008,29.056-10.272,58.144-11.424,87.712
                        c-1.312,22.624-0.64,44.576-1.312,67.072c0,1.312,0,1.984,0,2.624v60h281.632v-45.248c0,0,2.272-19.04-11.808-32.992
                        c-14.08-13.952-29.024-27.008-29.024-27.008c-7.2-5.888-13.76-12.608-19.424-19.936l-51.936-67.2
                        c3.232,2.624,6.368,5.12,9.6,7.744c15.968,12.224,33.12,17.376,52.832,12.224c11.424-2.624,22.976-1.312,33.12,5.12
                        c5.664,3.776,11.936,7.04,18.24,10.304c14.816,7.68,33.056,4.16,43.712-8.64c6.56-7.872,13.12-15.744,19.68-23.488
                        C450.952,184.989,449.416,170.493,439.208,162.493z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M414.312,488.861l-32-64.032c-2.72-5.408-8.256-8.832-14.304-8.832h-256c-6.048,0-11.584,3.424-14.304,8.832l-32,64
                        c-2.496,4.96-2.208,10.848,0.704,15.552c2.912,4.704,8.064,7.616,13.6,7.616h320c5.536,0,10.688-2.88,13.632-7.584
                        C416.552,499.709,416.808,493.821,414.312,488.861z"/>
                </g>
            </g>
        </svg>
    </div>
    `;
    document.getElementById("a7").innerHTML = `
    <div class="knight blacks" id="black_knight2" onclick="move_knight('black_knight2')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 511.997 511.997" xml:space="preserve">
            <g>
                <g>
                    <path d="M439.208,162.493c-42.656-33.504-84.672-66.976-127.168-100.48c-18.432-14.176-27.392-32.192-23.648-55.488
                        c0.64-5.792-2.592-7.744-8.96-5.792c-14.656,4.48-26.752,12.896-33.76,26.432c-9.6,19.328-24.8,26.432-44,25.792
                        c-28.704-1.312-46.496,14.208-61.792,36.16c-16.64,23.296-24.8,50.368-31.168,77.472c-7.008,29.056-10.272,58.144-11.424,87.712
                        c-1.312,22.624-0.64,44.576-1.312,67.072c0,1.312,0,1.984,0,2.624v60h281.632v-45.248c0,0,2.272-19.04-11.808-32.992
                        c-14.08-13.952-29.024-27.008-29.024-27.008c-7.2-5.888-13.76-12.608-19.424-19.936l-51.936-67.2
                        c3.232,2.624,6.368,5.12,9.6,7.744c15.968,12.224,33.12,17.376,52.832,12.224c11.424-2.624,22.976-1.312,33.12,5.12
                        c5.664,3.776,11.936,7.04,18.24,10.304c14.816,7.68,33.056,4.16,43.712-8.64c6.56-7.872,13.12-15.744,19.68-23.488
                        C450.952,184.989,449.416,170.493,439.208,162.493z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M414.312,488.861l-32-64.032c-2.72-5.408-8.256-8.832-14.304-8.832h-256c-6.048,0-11.584,3.424-14.304,8.832l-32,64
                        c-2.496,4.96-2.208,10.848,0.704,15.552c2.912,4.704,8.064,7.616,13.6,7.616h320c5.536,0,10.688-2.88,13.632-7.584
                        C416.552,499.709,416.808,493.821,414.312,488.861z"/>
                </g>
            </g>
        </svg>
    </div>
    `;

    // Bishops
    document.getElementById("h3").innerHTML = `
    <div class="bishop whites" id="white_bishop1" onClick="move_bishop('white_bishop1')">
        <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 39.471 39.471" xml:space="preserve">
            <g>
                <path d="M30.186,38.382c0.157,0.354,0.207,1.089,0.207,1.089H8.988c0,0,0.004-0.74,0.187-1.111
                    c0.184-0.373,0.726-0.719,0.726-0.719h0.096c0.004-0.078,0.014-0.164,0.031-0.255h-0.003c-0.861-0.963-1.648-2.392-1.525-3.864
                    c0.123-1.477,1.652-2.957,2.504-4.104h0.011c0.019-0.089,0.043-0.173,0.072-0.255c-0.227-0.008-0.904-0.358-0.764-0.817
                    c0.165-0.571,0.899-0.712,1.112-0.712h0.073c0.064-0.084,0.182-0.176,0.387-0.275c1.797-2.373,5.083-5.746,4.138-8.771
                    c-0.878,0-1.545,0-1.58-0.001c-0.146-0.011-1.18-0.389-1.088-0.991c0.107-0.753,1.175-1.022,1.313-1.022c0.033,0,0.409,0,0.944,0
                    c0,0-0.099-2.641-0.151-2.716c-0.531-0.056-0.938-0.367-0.938-0.747c0-0.419,0.491-0.763,1.101-0.763
                    c-1.844-1.129-2.609-3.351-1.834-4.511c0.662-0.987,1.646-1.769,2.463-2.622l1.422,2.051c0,0,0.115,0.376,0.633,0.366
                    c0.584-0.012,0.25-0.413,0.25-0.413l-1.791-2.562c0.516-0.506,1.605-1.531,2.306-2.21c-0.662-0.22-0.913-0.669-0.913-1.209
                    C18.17,0.488,18.811,0,19.903,0c1.092,0,1.934,0.488,1.934,1.236c0,0.54-0.375,0.989-1.038,1.209
                    c2.562,2.481,3.922,3.522,5.173,5.392c0.776,1.16,0.119,3.382-1.727,4.511c0.608,0,1.102,0.344,1.102,0.763
                    c0,0.412-0.475,0.743-1.065,0.756l-0.047,2.707c0.746,0,1.294,0,1.333,0c0.139,0,1.147,0.321,1.255,1.076
                    c0.093,0.603-0.882,0.928-1.028,0.938c-0.04,0.001-0.994,0.001-2.158,0.001c0.117,2.112,3.867,8.297,4.586,9.049h0.073
                    c0.214,0,0.998,0.122,1.163,0.696c0.142,0.456-0.812,0.834-0.812,0.834c-0.005,0,2.222,3,2.328,4.49
                    c0.103,1.402-0.694,2.676-1.525,3.627c0.042,0.132,0.068,0.262,0.063,0.383C29.628,37.749,30.05,38.08,30.186,38.382z"/>
            </g>
        </svg>
    </div>
    `;
    document.getElementById("h6").innerHTML = `
    <div class="bishop whites" id="white_bishop2" onClick="move_bishop('white_bishop2')">
        <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 39.471 39.471" xml:space="preserve">
            <g>
                <path d="M30.186,38.382c0.157,0.354,0.207,1.089,0.207,1.089H8.988c0,0,0.004-0.74,0.187-1.111
                    c0.184-0.373,0.726-0.719,0.726-0.719h0.096c0.004-0.078,0.014-0.164,0.031-0.255h-0.003c-0.861-0.963-1.648-2.392-1.525-3.864
                    c0.123-1.477,1.652-2.957,2.504-4.104h0.011c0.019-0.089,0.043-0.173,0.072-0.255c-0.227-0.008-0.904-0.358-0.764-0.817
                    c0.165-0.571,0.899-0.712,1.112-0.712h0.073c0.064-0.084,0.182-0.176,0.387-0.275c1.797-2.373,5.083-5.746,4.138-8.771
                    c-0.878,0-1.545,0-1.58-0.001c-0.146-0.011-1.18-0.389-1.088-0.991c0.107-0.753,1.175-1.022,1.313-1.022c0.033,0,0.409,0,0.944,0
                    c0,0-0.099-2.641-0.151-2.716c-0.531-0.056-0.938-0.367-0.938-0.747c0-0.419,0.491-0.763,1.101-0.763
                    c-1.844-1.129-2.609-3.351-1.834-4.511c0.662-0.987,1.646-1.769,2.463-2.622l1.422,2.051c0,0,0.115,0.376,0.633,0.366
                    c0.584-0.012,0.25-0.413,0.25-0.413l-1.791-2.562c0.516-0.506,1.605-1.531,2.306-2.21c-0.662-0.22-0.913-0.669-0.913-1.209
                    C18.17,0.488,18.811,0,19.903,0c1.092,0,1.934,0.488,1.934,1.236c0,0.54-0.375,0.989-1.038,1.209
                    c2.562,2.481,3.922,3.522,5.173,5.392c0.776,1.16,0.119,3.382-1.727,4.511c0.608,0,1.102,0.344,1.102,0.763
                    c0,0.412-0.475,0.743-1.065,0.756l-0.047,2.707c0.746,0,1.294,0,1.333,0c0.139,0,1.147,0.321,1.255,1.076
                    c0.093,0.603-0.882,0.928-1.028,0.938c-0.04,0.001-0.994,0.001-2.158,0.001c0.117,2.112,3.867,8.297,4.586,9.049h0.073
                    c0.214,0,0.998,0.122,1.163,0.696c0.142,0.456-0.812,0.834-0.812,0.834c-0.005,0,2.222,3,2.328,4.49
                    c0.103,1.402-0.694,2.676-1.525,3.627c0.042,0.132,0.068,0.262,0.063,0.383C29.628,37.749,30.05,38.08,30.186,38.382z"/>
            </g>
        </svg>
    </div>
    `;

    document.getElementById("a3").innerHTML = `
    <div class="bishop blacks" id="black_bishop1" onClick="move_bishop('black_bishop1')">
        <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 39.471 39.471" xml:space="preserve">
            <g>
                <path d="M30.186,38.382c0.157,0.354,0.207,1.089,0.207,1.089H8.988c0,0,0.004-0.74,0.187-1.111
                    c0.184-0.373,0.726-0.719,0.726-0.719h0.096c0.004-0.078,0.014-0.164,0.031-0.255h-0.003c-0.861-0.963-1.648-2.392-1.525-3.864
                    c0.123-1.477,1.652-2.957,2.504-4.104h0.011c0.019-0.089,0.043-0.173,0.072-0.255c-0.227-0.008-0.904-0.358-0.764-0.817
                    c0.165-0.571,0.899-0.712,1.112-0.712h0.073c0.064-0.084,0.182-0.176,0.387-0.275c1.797-2.373,5.083-5.746,4.138-8.771
                    c-0.878,0-1.545,0-1.58-0.001c-0.146-0.011-1.18-0.389-1.088-0.991c0.107-0.753,1.175-1.022,1.313-1.022c0.033,0,0.409,0,0.944,0
                    c0,0-0.099-2.641-0.151-2.716c-0.531-0.056-0.938-0.367-0.938-0.747c0-0.419,0.491-0.763,1.101-0.763
                    c-1.844-1.129-2.609-3.351-1.834-4.511c0.662-0.987,1.646-1.769,2.463-2.622l1.422,2.051c0,0,0.115,0.376,0.633,0.366
                    c0.584-0.012,0.25-0.413,0.25-0.413l-1.791-2.562c0.516-0.506,1.605-1.531,2.306-2.21c-0.662-0.22-0.913-0.669-0.913-1.209
                    C18.17,0.488,18.811,0,19.903,0c1.092,0,1.934,0.488,1.934,1.236c0,0.54-0.375,0.989-1.038,1.209
                    c2.562,2.481,3.922,3.522,5.173,5.392c0.776,1.16,0.119,3.382-1.727,4.511c0.608,0,1.102,0.344,1.102,0.763
                    c0,0.412-0.475,0.743-1.065,0.756l-0.047,2.707c0.746,0,1.294,0,1.333,0c0.139,0,1.147,0.321,1.255,1.076
                    c0.093,0.603-0.882,0.928-1.028,0.938c-0.04,0.001-0.994,0.001-2.158,0.001c0.117,2.112,3.867,8.297,4.586,9.049h0.073
                    c0.214,0,0.998,0.122,1.163,0.696c0.142,0.456-0.812,0.834-0.812,0.834c-0.005,0,2.222,3,2.328,4.49
                    c0.103,1.402-0.694,2.676-1.525,3.627c0.042,0.132,0.068,0.262,0.063,0.383C29.628,37.749,30.05,38.08,30.186,38.382z"/>
            </g>
        </svg>
    </div>
    `;
    document.getElementById("a6").innerHTML = `
    <div class="bishop blacks" id="black_bishop2" onClick="move_bishop('black_bishop2')">
        <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 39.471 39.471" xml:space="preserve">
            <g>
                <path d="M30.186,38.382c0.157,0.354,0.207,1.089,0.207,1.089H8.988c0,0,0.004-0.74,0.187-1.111
                    c0.184-0.373,0.726-0.719,0.726-0.719h0.096c0.004-0.078,0.014-0.164,0.031-0.255h-0.003c-0.861-0.963-1.648-2.392-1.525-3.864
                    c0.123-1.477,1.652-2.957,2.504-4.104h0.011c0.019-0.089,0.043-0.173,0.072-0.255c-0.227-0.008-0.904-0.358-0.764-0.817
                    c0.165-0.571,0.899-0.712,1.112-0.712h0.073c0.064-0.084,0.182-0.176,0.387-0.275c1.797-2.373,5.083-5.746,4.138-8.771
                    c-0.878,0-1.545,0-1.58-0.001c-0.146-0.011-1.18-0.389-1.088-0.991c0.107-0.753,1.175-1.022,1.313-1.022c0.033,0,0.409,0,0.944,0
                    c0,0-0.099-2.641-0.151-2.716c-0.531-0.056-0.938-0.367-0.938-0.747c0-0.419,0.491-0.763,1.101-0.763
                    c-1.844-1.129-2.609-3.351-1.834-4.511c0.662-0.987,1.646-1.769,2.463-2.622l1.422,2.051c0,0,0.115,0.376,0.633,0.366
                    c0.584-0.012,0.25-0.413,0.25-0.413l-1.791-2.562c0.516-0.506,1.605-1.531,2.306-2.21c-0.662-0.22-0.913-0.669-0.913-1.209
                    C18.17,0.488,18.811,0,19.903,0c1.092,0,1.934,0.488,1.934,1.236c0,0.54-0.375,0.989-1.038,1.209
                    c2.562,2.481,3.922,3.522,5.173,5.392c0.776,1.16,0.119,3.382-1.727,4.511c0.608,0,1.102,0.344,1.102,0.763
                    c0,0.412-0.475,0.743-1.065,0.756l-0.047,2.707c0.746,0,1.294,0,1.333,0c0.139,0,1.147,0.321,1.255,1.076
                    c0.093,0.603-0.882,0.928-1.028,0.938c-0.04,0.001-0.994,0.001-2.158,0.001c0.117,2.112,3.867,8.297,4.586,9.049h0.073
                    c0.214,0,0.998,0.122,1.163,0.696c0.142,0.456-0.812,0.834-0.812,0.834c-0.005,0,2.222,3,2.328,4.49
                    c0.103,1.402-0.694,2.676-1.525,3.627c0.042,0.132,0.068,0.262,0.063,0.383C29.628,37.749,30.05,38.08,30.186,38.382z"/>
            </g>
        </svg>
    </div>
    `;

    // King & Queen
    document.getElementById("h4").innerHTML = `
    <div class="king whites" id="white_king" onClick="move_king('white_king')">
        <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
            <circle cx="96" cy="32" r="8" />
            <circle cx="184" cy="72" r="8" />
            <circle cx="8" cy="72" r="8" />
            <path
                d="m23.805 160h144.395l15.61-70.265a8 8 0 0 0 -12.248-8.391l-40.462 26.972-27.945-55.894a8 8 0 0 0 -14.31 0l-27.945 55.894-40.463-26.972a8 8 0 0 0 -12.247 8.391z" />
            <path d="m24 168v16a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16z" />
        </svg>
    </div>
    `;
    document.getElementById("h5").innerHTML = `
    <div class="queen whites" id="white_queen" onclick="move_queen('white_queen')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 246 246" xml:space="preserve">
        <path d="M211.416,238.5c0,4.142-3.358,7.5-7.5,7.5h-163c-4.142,0-7.5-3.358-7.5-7.5v-16c0-4.142,3.358-7.5,7.5-7.5h163
            c4.142,0,7.5,3.358,7.5,7.5V238.5z M236.893,126.179c0-33.38-27.156-60.536-60.536-60.536c-4.074,0-8.05,0.417-11.899,1.193
            c6.153,13.469,9.756,30.194,9.756,48.461c0,17.046-3.145,32.703-8.566,45.703h-16.603c6.262-12,10.169-28.236,10.169-45.703
            c0-36.183-16.731-66.773-36.536-66.773c-19.804,0-36.535,30.603-36.535,66.785c0,17.467,3.907,33.691,10.169,45.691h-16.6
            c-5.421-13-8.569-28.656-8.569-45.703c0-18.318,3.623-35.064,9.807-48.553c-3.665-0.7-7.442-1.089-11.307-1.089
            c-33.38,0-60.536,27.15-60.536,60.53c0,18.628,8.511,35.309,21.789,46.422c-0.332,1.267-0.479,2.586-0.479,3.956v4.661
            c0,8.633,6.928,15.776,15.561,15.776h153.402c8.633,0,15.037-7.144,15.037-15.776v-4.661c0-1.211,0.158-2.385-0.104-3.517
            C227.896,161.935,236.893,145.054,236.893,126.179z M122.999,0c-8.685,0-15.75,7.065-15.75,15.75s7.065,15.75,15.75,15.75
            s15.75-7.065,15.75-15.75S131.684,0,122.999,0z"/>
        </svg>
    </div>
    `;

    document.getElementById("a4").innerHTML = `
    <div class="king blacks" id="black_king" onClick="move_king('black_king')">
        <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
            <circle cx="96" cy="32" r="8" />
            <circle cx="184" cy="72" r="8" />
            <circle cx="8" cy="72" r="8" />
            <path
                d="m23.805 160h144.395l15.61-70.265a8 8 0 0 0 -12.248-8.391l-40.462 26.972-27.945-55.894a8 8 0 0 0 -14.31 0l-27.945 55.894-40.463-26.972a8 8 0 0 0 -12.247 8.391z" />
            <path d="m24 168v16a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16z" />
        </svg>
    </div>
    `;
    document.getElementById("a5").innerHTML = `
    <div class="queen blacks" id="black_queen" onclick="move_queen('black_queen')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 246 246" xml:space="preserve">
        <path d="M211.416,238.5c0,4.142-3.358,7.5-7.5,7.5h-163c-4.142,0-7.5-3.358-7.5-7.5v-16c0-4.142,3.358-7.5,7.5-7.5h163
            c4.142,0,7.5,3.358,7.5,7.5V238.5z M236.893,126.179c0-33.38-27.156-60.536-60.536-60.536c-4.074,0-8.05,0.417-11.899,1.193
            c6.153,13.469,9.756,30.194,9.756,48.461c0,17.046-3.145,32.703-8.566,45.703h-16.603c6.262-12,10.169-28.236,10.169-45.703
            c0-36.183-16.731-66.773-36.536-66.773c-19.804,0-36.535,30.603-36.535,66.785c0,17.467,3.907,33.691,10.169,45.691h-16.6
            c-5.421-13-8.569-28.656-8.569-45.703c0-18.318,3.623-35.064,9.807-48.553c-3.665-0.7-7.442-1.089-11.307-1.089
            c-33.38,0-60.536,27.15-60.536,60.53c0,18.628,8.511,35.309,21.789,46.422c-0.332,1.267-0.479,2.586-0.479,3.956v4.661
            c0,8.633,6.928,15.776,15.561,15.776h153.402c8.633,0,15.037-7.144,15.037-15.776v-4.661c0-1.211,0.158-2.385-0.104-3.517
            C227.896,161.935,236.893,145.054,236.893,126.179z M122.999,0c-8.685,0-15.75,7.065-15.75,15.75s7.065,15.75,15.75,15.75
            s15.75-7.065,15.75-15.75S131.684,0,122.999,0z"/>
        </svg>
    </div>
    `;
}
initialize_pieces();