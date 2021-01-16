/* -----------PIECES / VARIABLES---------- */
let turnNumber = 1;
let whiteTurn = true;

let alphaLimit = ["a", "b", "c", "d", "e", "f", "g", "h"];

let currentElement = null;
let selectionArray = _array = _target = [];

let startTime;
let elapsedTime = 0;
let timerInterval;
let turn = document.getElementById("turn");
let play = document.getElementById("play");
let black_alias = document.getElementById("black-alias");
let white_alias = document.getElementById("white-alias");
let welcome_note = document.getElementById("welcome-note");
let board_black = document.getElementById("board-black");
let board_white = document.getElementById("board-white");
let result_note = document.getElementById("result-note");
let results = document.getElementById("results");

/* -----------MOVEMENT---------- */

/*---------- 1 # Pawn ---------- */
function move_pawn(id) {
    if (whiteTurn && id.includes("black"))
        return;
    else if (!whiteTurn && id.includes("white"))
        return;

    let pawn = document.getElementById(id);
    let position = pawn.parentElement.id;
    currentElement = pawn;
    let char = kill_left = kill_right = kill_ahead = kill_type = "";
    let steps = 1;
    clearSuggestions();

    if (position.includes('b') || position.includes('g')) {
        steps = 2;
    }

    for (let i = 1; i <= steps; i++) {
        if (!whiteTurn) {
            char = returnNextChar(0, position, i);
        }
        else if (whiteTurn) {
            char = returnPrevChar(0, position, i);
        }
        if (alphaLimit.includes(char)) {
            let a = document.getElementById(char + position.substr(1, 1));
            if (a.innerHTML === "") {
                selectionArray.push(a);
                setTimeout(() => {
                    a.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                    a.setAttribute("onClick", `useSuggestion(${a.id}, '${position}')`);
                }, 100);
            }
        }
    }
    _array = selectionArray;

    if (whiteTurn) {
        kill_ahead = returnPrevChar(0, position, 1);
        kill_type = "black";
    }
    else {
        kill_ahead = returnNextChar(0, position, 1);
        kill_type = "white";
    }
    if (alphaLimit.includes(kill_ahead)) {
        kill_right = returnNextChar(1, position, 1);
        kill_left = returnPrevChar(1, position, 1);

        if (kill_left > 0 && kill_left < 9) {
            let a = document.getElementById(kill_ahead + kill_left);
            if (a.childNodes[0] && a.childNodes[0].id.includes(kill_type)) {
                _target.push(a);
                setTimeout(() => {
                    a.innerHTML += `<div class="target"></div>`;
                    a.setAttribute("onClick", `killPiece(${a.id}, '${position}')`);
                }, 100);
            }
        }
        if (kill_right > 0 && kill_right < 9) {
            let b = document.getElementById(kill_ahead + kill_right);
            if (b.childNodes[0] && b.childNodes[0].id.includes(kill_type)) {
                _target.push(b);
                setTimeout(() => {
                    b.innerHTML += `<div class="target"></div>`;
                    b.setAttribute("onClick", `killPiece(${b.id}, '${position}')`);
                }, 100);
            }
        }
    }
}

/*---------- 2 # Knight ---------- */
function move_knight(id) {
    let knight = document.getElementById(id);
    let position = knight.parentElement.id;
    currentElement = knight;

    let char = char_left = char_right = kill_type = '';
    let move_horizontal = true;
    let _move = 2;
    clearSuggestions();

    if (whiteTurn) {
        kill_type = "black";

        if (id.includes(kill_type))
            return;
    }
    else {
        kill_type = "white";

        if (id.includes(kill_type))
            return;
    }
    for (let i = 1; i <= 8; i++) {
        if (i % 2 === 0) {
            if (move_horizontal) {
                char = returnPrevChar(1, position, _move);
                char_left = returnNextChar(0, position, 1);
                char_right = returnPrevChar(0, position, 1);
                if ((char > 0 && char < 9) && alphaLimit.includes(char_left)) {
                    let a = document.getElementById(char_left + char);
                    if (a.innerHTML === "") {
                        selectionArray.push(a);
                        setTimeout(() => {
                            a.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                            a.setAttribute("onClick", `useSuggestion(${a.id}, '${position}')`);
                        }, 100);
                    }

                    else {
                        if (a.childNodes.length) {
                            let _count = 0;
                            a.childNodes.forEach((node, index) => {
                                if (node.nodeType == 1 && _count === 0) {
                                    if ((a.childNodes[index]) && a.childNodes[index].id) {
                                        if (a.childNodes[index].id.includes(kill_type)) {
                                            _target.push(a);
                                            setTimeout(() => {
                                                a.innerHTML += `<div class="target"></div>`;
                                                a.setAttribute("onClick", `killPiece(${a.id}, '${position}')`);
                                            }, 100);
                                        }
                                    }
                                    _count++;
                                }
                            });
                        }
                    }
                }
                if ((char > 0 && char < 9) && alphaLimit.includes(char_right)) {
                    let b = document.getElementById(char_right + char);
                    if (b.innerHTML === "") {
                        selectionArray.push(b);
                        setTimeout(() => {
                            b.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                            b.setAttribute("onClick", `useSuggestion(${b.id}, '${position}')`);
                        }, 100);
                    }

                    else {
                        if (b.childNodes.length) {
                            let _count = 0;
                            b.childNodes.forEach((node, index) => {
                                if (node.nodeType == 1 && _count === 0) {
                                    if (b.childNodes[index] && b.childNodes[index].id) {
                                        if (b.childNodes[index].id.includes(kill_type)) {
                                            _target.push(b);
                                            setTimeout(() => {
                                                b.innerHTML += `<div class="target"></div>`;
                                                b.setAttribute("onClick", `killPiece(${b.id}, '${position}')`);
                                            }, 100);
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
                move_horizontal = !move_horizontal;

            }
            else if (!move_horizontal) {
                char = returnNextChar(0, position, _move);
                char_left = returnNextChar(1, position, 1);
                char_right = returnPrevChar(1, position, 1);

                if (char_right > 0 && char_right < 9 && alphaLimit.includes(char)) {
                    let b = document.getElementById(char + char_right);
                    if (b.innerHTML === "") {
                        selectionArray.push(b);
                        setTimeout(() => {
                            b.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                            b.setAttribute("onClick", `useSuggestion(${b.id}, '${position}')`);
                        }, 100);
                    }

                    else {
                        if (b.childNodes.length) {
                            let _count = 0;
                            b.childNodes.forEach((node, index) => {
                                if (node.nodeType == 1 && _count === 0) {
                                    if (b.childNodes[index] && b.childNodes[index].id) {
                                        if (b.childNodes[index].id.includes(kill_type)) {
                                            _target.push(b);
                                            setTimeout(() => {
                                                b.innerHTML += `<div class="target"></div>`;
                                                b.setAttribute("onClick", `killPiece(${b.id}, '${position}')`);
                                            }, 100);
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
                if (char_left > 0 && char_left < 9 && alphaLimit.includes(char)) {
                    let a = document.getElementById(char + char_left);
                    if (a.innerHTML === "") {
                        selectionArray.push(a);
                        setTimeout(() => {
                            a.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                            a.setAttribute("onClick", `useSuggestion(${a.id}, '${position}')`);
                        }, 100);
                    }

                    else {
                        if (a.childNodes.length) {
                            let _count = 0;
                            a.childNodes.forEach((node, index) => {
                                if (node.nodeType == 1 && _count === 0) {
                                    if ((a.childNodes[index]) && a.childNodes[index].id) {
                                        if (a.childNodes[index].id.includes(kill_type)) {
                                            _target.push(a);
                                            setTimeout(() => {
                                                a.innerHTML += `<div class="target"></div>`;
                                                a.setAttribute("onClick", `killPiece(${a.id}, '${position}')`);
                                            }, 100);
                                        }
                                    }
                                    _count++;
                                }
                            });
                        }
                    }
                }
                move_horizontal = !move_horizontal;
                _move = -(_move);
            }
        }
    }
    _array = selectionArray;
}

/*---------- 3 # Rook ---------- */
function move_rook(id) {
    move_vertical_horizontal(id, 8);
}

/*---------- 4 # Bishop ---------- */
function move_bishop(id) {
    move_diagonal(id, 8);
}

/*---------- 5 # Queen ---------- */
function move_queen(id) {
    move_vertical_horizontal(id, 8);
    move_diagonal(id, 8);
}

/*---------- 6 # King ---------- */
function move_king(id) {
    move_vertical_horizontal(id, 1);
    move_diagonal(id, 1);
}


/* -----------GENERIC FUNCTIONS---------- */
// Start playing
function play_game() {
    welcome_note.style.display = "none";
    if (white_alias.value != "")
        turn.innerHTML = `White's turn (${white_alias.value})`;

    else
        turn.innerHTML = `White's turn`;

    if (black_alias.value.trim() != "")
        board_black.innerHTML = `Black (${black_alias.value})`;
    if (white_alias.value.trim() != "")
        board_white.innerHTML = `White (${white_alias.value})`;
    start();
}

// To move vertical or horizontal according to number of moves given
function move_vertical_horizontal(id, number_of_moves) {
    if (turnNumber === 1)
        return;

    else if (whiteTurn && id.includes("black"))
        return;
    else if (!whiteTurn && id.includes("white"))
        return;

    let rook = document.getElementById(id);
    let position = rook.parentElement.id;
    currentElement = rook;

    let char = num = char_left = char_right = char_top = char_bottom = kill_type = '';
    let ban_a = ban_b = ban_c = ban_d = false;

    clearSuggestions();

    char = position.substr(0, 1);
    num = position.substr(1, 1);

    if (whiteTurn) {
        kill_type = "black";

        if (id.includes(kill_type))
            return;
    }
    else {
        kill_type = "white";

        if (id.includes(kill_type))
            return;
    }

    for (let i = 1; i <= number_of_moves; i++) {
        char_left = returnNextChar(1, position, i);
        char_right = returnPrevChar(1, position, i);
        char_top = returnNextChar(0, position, i);
        char_bottom = returnPrevChar(0, position, i);

        if (alphaLimit.includes(char)) {
            if (char_right < 9 && char_right > 0) {
                let a = document.getElementById(char + char_right);

                if (a.innerHTML === "" && !ban_a) {
                    selectionArray.push(a);
                    setTimeout(() => {
                        a.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                        a.setAttribute("onClick", `useSuggestion(${a.id}, '${position}')`);
                    }, 100);
                }
                else {
                    if (a.childNodes.length < 2) {
                        if ((a.childNodes[0]) && a.childNodes[0].id) {
                            if (a.childNodes[0].id.includes(kill_type) && !ban_a) {
                                _target.push(a);
                                setTimeout(() => {
                                    a.innerHTML += `<div class="target"></div>`;
                                    a.setAttribute("onClick", `killPiece(${a.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    else {
                        if ((a.childNodes[1]) && a.childNodes[1].id) {
                            if (a.childNodes[1].id.includes(kill_type) && !ban_a) {
                                _target.push(a);
                                setTimeout(() => {
                                    a.innerHTML += `<div class="target"></div>`;
                                    a.setAttribute("onClick", `killPiece(${a.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    ban_a = true;
                }
            }


            if (char_left < 9 && char_left > 0) {
                let b = document.getElementById(char + char_left);

                if (b.innerHTML === "" && !ban_b) {
                    selectionArray.push(b);
                    setTimeout(() => {
                        b.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                        b.setAttribute("onClick", `useSuggestion(${b.id}, '${position}')`);
                    }, 100);
                }
                else {
                    if (b.childNodes.length < 2) {
                        if ((b.childNodes[0]) && b.childNodes[0].id) {
                            if (b.childNodes[0].id.includes(kill_type) && !ban_b) {
                                _target.push(b);
                                setTimeout(() => {
                                    b.innerHTML += `<div class="target"></div>`;
                                    b.setAttribute("onClick", `killPiece(${b.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    else {
                        if (b.childNodes[1].id.includes(kill_type) && !ban_b) {
                            _target.push(b);
                            setTimeout(() => {
                                b.innerHTML += `<div class="target"></div>`;
                                b.setAttribute("onClick", `killPiece(${b.id}, '${position}')`);
                            }, 100);
                        }
                    }
                    ban_b = true;
                }
            }

        }

        if (num > 0 && num < 9) {
            if (alphaLimit.includes(char_top)) {
                let c = document.getElementById(char_top + num);
                if (c.innerHTML === "" && !ban_c) {
                    selectionArray.push(c);
                    setTimeout(() => {
                        c.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                        c.setAttribute("onClick", `useSuggestion(${c.id}, '${position}')`);
                    }, 100);
                }
                else {
                    if (c.childNodes.length < 2) {
                        if ((c.childNodes[0]) && c.childNodes[0].id) {
                            if (c.childNodes[0].id.includes(kill_type) && !ban_c) {
                                _target.push(c);
                                setTimeout(() => {
                                    c.innerHTML += `<div class="target"></div>`;
                                    c.setAttribute("onClick", `killPiece(${c.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    else {
                        if ((c.childNodes[1]) && c.childNodes[1].id) {
                            if (c.childNodes[1].id.includes(kill_type) && !ban_c) {
                                _target.push(c);
                                setTimeout(() => {
                                    c.innerHTML += `<div class="target"></div>`;
                                    c.setAttribute("onClick", `killPiece(${c.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    ban_c = true;
                }
            }

            if (alphaLimit.includes(char_bottom)) {
                let d = document.getElementById(char_bottom + num);
                if (d.innerHTML === "" && !ban_d) {
                    selectionArray.push(d);
                    setTimeout(() => {
                        d.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                        d.setAttribute("onClick", `useSuggestion(${d.id}, '${position}')`);
                    }, 100);
                }
                else {
                    if (d.childNodes.length < 2) {
                        if ((d.childNodes[0]) && d.childNodes[0].id) {
                            if (d.childNodes[0].id.includes(kill_type) && !ban_d) {
                                _target.push(d);
                                setTimeout(() => {
                                    d.innerHTML += `<div class="target"></div>`;
                                    d.setAttribute("onClick", `killPiece(${d.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    else {
                        if ((d.childNodes[1]) && d.childNodes[1].id) {
                            if (d.childNodes[1].id.includes(kill_type) && !ban_d) {
                                _target.push(d);
                                setTimeout(() => {
                                    d.innerHTML += `<div class="target"></div>`;
                                    d.setAttribute("onClick", `killPiece(${d.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    ban_d = true;
                }
            }
        }
    }
    _array = selectionArray;
}

// To move diagonally according to number of moves given
function move_diagonal(id, number_of_moves) {
    if (turnNumber === 1)
        return;
    else if (whiteTurn && id.includes("black"))
        return;
    else if (!whiteTurn && id.includes("white"))
        return;

    let piece = document.getElementById(id);
    let position = piece.parentElement.id;
    currentElement = piece;

    let char_left = char_right = char_bottom = char_top = kill_type = '';
    let ban_a = ban_b = ban_c = ban_d = false;

    if (whiteTurn) {
        kill_type = "black";

        if (id.includes(kill_type))
            return;
    }
    else {
        kill_type = "white";

        if (id.includes(kill_type))
            return;
    }

    for (let i = 1; i <= number_of_moves; i++) {
        char_top = returnNextChar(0, position, i);
        char_bottom = returnPrevChar(0, position, i);

        char_left = returnPrevChar(1, position, i);
        char_right = returnNextChar(1, position, i);

        if (alphaLimit.includes(char_top)) {
            if (char_left < 9 && char_left > 0) {
                let a = document.getElementById(char_top + char_left);
                if (a.innerHTML === "" && !ban_a) {
                    selectionArray.push(a);
                    setTimeout(() => {
                        a.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                        a.setAttribute("onClick", `useSuggestion(${a.id}, '${position}')`);
                    }, 100);
                }
                else {
                    if (a.childNodes.length < 2) {
                        if ((a.childNodes[0]) && a.childNodes[0].id) {
                            if (a.childNodes[0].id.includes(kill_type) && !ban_a) {
                                _target.push(a);
                                setTimeout(() => {
                                    a.innerHTML += `<div class="target"></div>`;
                                    a.setAttribute("onClick", `killPiece(${a.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    else {
                        if ((a.childNodes[1]) && a.childNodes[1].id) {
                            if (a.childNodes[1].id.includes(kill_type) && !ban_a) {
                                _target.push(a);
                                setTimeout(() => {
                                    a.innerHTML += `<div class="target"></div>`;
                                    a.setAttribute("onClick", `killPiece(${a.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    ban_a = true;
                }
            }
            if (char_right < 9 && char_right > 0) {
                let b = document.getElementById(char_top + char_right);
                if (b.innerHTML === "" && !ban_b) {
                    selectionArray.push(b);
                    setTimeout(() => {
                        b.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                        b.setAttribute("onClick", `useSuggestion(${b.id}, '${position}')`);
                    }, 100);
                }
                else {
                    if (b.childNodes.length < 2) {
                        if ((b.childNodes[0]) && b.childNodes[0].id) {
                            if (b.childNodes[0].id.includes(kill_type) && !ban_b) {
                                _target.push(b);
                                setTimeout(() => {
                                    b.innerHTML += `<div class="target"></div>`;
                                    b.setAttribute("onClick", `killPiece(${b.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    else {
                        if (b.childNodes[1].id.includes(kill_type) && !ban_b) {
                            _target.push(b);
                            setTimeout(() => {
                                b.innerHTML += `<div class="target"></div>`;
                                b.setAttribute("onClick", `killPiece(${b.id}, '${position}')`);
                            }, 100);
                        }
                    }
                    ban_b = true;
                }
            }
        }
        if (alphaLimit.includes(char_bottom)) {
            if (char_left < 9 && char_left > 0) {
                let c = document.getElementById(char_bottom + char_left);
                if (c.innerHTML === "" && !ban_c) {
                    selectionArray.push(c);
                    setTimeout(() => {
                        c.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                        c.setAttribute("onClick", `useSuggestion(${c.id}, '${position}')`);
                    }, 100);
                }
                else {
                    if (c.childNodes.length < 2) {
                        if ((c.childNodes[0]) && c.childNodes[0].id) {
                            if (c.childNodes[0].id.includes(kill_type) && !ban_c) {
                                _target.push(c);
                                setTimeout(() => {
                                    c.innerHTML += `<div class="target"></div>`;
                                    c.setAttribute("onClick", `killPiece(${c.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    else {
                        if ((c.childNodes[1]) && c.childNodes[1].id) {
                            if (c.childNodes[1].id.includes(kill_type) && !ban_c) {
                                _target.push(c);
                                setTimeout(() => {
                                    c.innerHTML += `<div class="target"></div>`;
                                    c.setAttribute("onClick", `killPiece(${c.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    ban_c = true;
                }
            }
            if (char_right < 9 && char_right > 0) {
                let d = document.getElementById(char_bottom + char_right);
                if (d.innerHTML === "" && !ban_d) {
                    selectionArray.push(d);
                    setTimeout(() => {
                        d.innerHTML = `<img class="suggestion" src="./images/circle.png">`;
                        d.setAttribute("onClick", `useSuggestion(${d.id}, '${position}')`);
                    }, 100);
                }
                else {
                    if (d.childNodes.length < 2) {
                        if ((d.childNodes[0]) && d.childNodes[0].id) {
                            if (d.childNodes[0].id.includes(kill_type) && !ban_d) {
                                _target.push(d);
                                setTimeout(() => {
                                    d.innerHTML += `<div class="target"></div>`;
                                    d.setAttribute("onClick", `killPiece(${d.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    else {
                        if ((d.childNodes[1]) && d.childNodes[1].id) {
                            if (d.childNodes[1].id.includes(kill_type) && !ban_d) {
                                _target.push(d);
                                setTimeout(() => {
                                    d.innerHTML += `<div class="target"></div>`;
                                    d.setAttribute("onClick", `killPiece(${d.id}, '${position}')`);
                                }, 100);
                            }
                        }
                    }
                    ban_d = true;
                }
            }
        }
    }
    _array = selectionArray;
}

// Return next row's element
function returnNextChar(start, character, nextRange) {
    return String.fromCharCode(character.substr(start, 1).charCodeAt(0) + nextRange)
}
// Return previous row's element
function returnPrevChar(start, character, prevRange) {
    return String.fromCharCode(character.substr(start, 1).charCodeAt(0) - prevRange)
}

// Parse Object as HTML
function outerHTML(node) {
    return node.outerHTML || new XMLSerializer().serializeToString(node);
}

// Clear all suggestions
function clearSuggestions() {
    if (selectionArray.length) {
        selectionArray.forEach((element) => {
            element.innerHTML = "";
        });
        selectionArray = [];
    }

    if (_target.length) {
        _target.forEach((target) => {
            if (target.lastChild && target.lastChild.className === "target") {
                target.removeChild(target.lastChild);
                target.removeAttribute("onclick");
            }
        });
        _target = [];
    }
}

function useSuggestion(attr, position) {
    useSuggestionAndRemoveRest(attr, currentElement, position, _array);
    postMoveSteps();
}

// Kill piece
function killPiece(piece, position) {
    // console.log(piece, position, currentElement, piece.childNodes[1]);
    let _count = 0;
    piece.childNodes.forEach((node, index) => {
        if (node.nodeType == 1 && _count === 0) {
            checkKingDeath(piece.childNodes[index]);

            piece.removeChild(piece.childNodes[index]);

            piece.removeAttribute("onclick");
            piece.innerHTML = outerHTML(currentElement);
            document.getElementById(position).innerHTML = "";

            if (_array.length) {
                _array.forEach((remove_suggestion) => {
                    remove_suggestion.innerHTML = "";
                });
            }

            _target.forEach((target) => {
                if (target.lastChild.className === "target") {
                    target.removeChild(target.lastChild);
                }
            });

            _target = [];
            postMoveSteps();
            _count++;
        }
    });
}

// Check if king died
function checkKingDeath(piece) {
    var message;
    if (whiteTurn && piece.id.includes("black_king")) {
        if (white_alias.value.trim() != "")
            message = `White (${white_alias.value}) won`;

        else
            message = `White won`;

        result_note.style.display = "block";
        results.innerHTML = message;
    }
    if (!whiteTurn && piece.id.includes("white_king")) {
        if (black_alias.value.trim() != "")
            message = `Black (${black_alias.value}) won`;

        else
            message = `Black won`;

        result_note.style.display = "block";
        results.innerHTML = message;
    }
}

// Move to suggestion and remove remaining suggestions
function useSuggestionAndRemoveRest(suggestion, knight, previous_position, _array) {
    suggestion.innerHTML = outerHTML(knight);
    suggestion.removeAttribute("onclick");
    document.getElementById(previous_position).innerHTML = ``;
    _array.forEach((remove_suggestion) => {
        if (suggestion !== remove_suggestion) {
            remove_suggestion.innerHTML = "";
        }
    });
    if (_target.length) {
        _target.forEach((target) => {
            if (target.lastChild && target.lastChild.className === "target") {
                target.removeChild(target.lastChild);
                target.removeAttribute("onclick");
            }
        });
        _target = [];
    }
}

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Create function to modify innerHTML
function print(txt) {
    if (whiteTurn)
        document.getElementById("white-time-display").innerHTML = txt;
    else
        document.getElementById("black-time-display").innerHTML = txt;
}

//"start", "pause" and "reset" functions
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
}

// Post move steps
function postMoveSteps() {
    selectionArray = [];
    whiteTurn = !whiteTurn;
    turnNumber++;

    if (whiteTurn) {
        if (white_alias.value.trim() != "")
            turn.innerHTML = `White's turn (${white_alias.value})`;

        else
            turn.innerHTML = `White's turn`;
    }
    else {
        if (white_alias.value.trim() != "")
            turn.innerHTML = `Black's turn (${black_alias.value})`;

        else
            turn.innerHTML = `Black's turn`;
    }

    pause();
    start();
}