import React from 'react'

class Menu extends React.Component {
    state = {
        divShown: 0,
    }

    handleMainsClick() {
        this.setState({ divShown: 0 });
    }

    handleSushiClick() {
        this.setState({ divShown: 1 });
    }

    handleSidesClick() {
        this.setState({ divShown: 2 });
    }

    handleDrinksClick() {
        this.setState({ divShown: 3 });
    }

    render() {

        let activeDiv;

        if (this.state.divShown === 0) {
            activeDiv = <div className="menu">
                <div className="menu-items">
                    <div className="home-column1 menu-column">
                        <div className="home-donburi menu-div">
                            <div className="menu-container">
                                <span className="menu-category">RICE BOWL</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Karaage</span>
                                <span className="menu-price">19.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Caramelised Karaage</span>
                                <span className="menu-price">20.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna Karaage</span>
                                <span className="menu-price">23.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon Karaage</span>
                                <span className="menu-price">23.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Teriyaki Katsu</span>
                                <span className="menu-price">22.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Teriyaki Chicken</span>
                                <span className="menu-price">19.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Teriyaki Salmon</span>
                                <span className="menu-price">21.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Teriyaki Pork</span>
                                <span className="menu-price">20.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Teriyaki Tofu</span>
                                <span className="menu-price">19.2</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Samurai Vegan</span>
                                <span className="menu-price">20.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Samurai Pork</span>
                                <span className="menu-price">24.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Katsu</span>
                                <span className="menu-price">21.8</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-column2 menu-column">
                        <div className="home-curry menu-div">
                            <div className="menu-container">
                                <span className="menu-category">CURRY</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Veggie</span>
                                <span className="menu-price">19.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Halloumi</span>
                                <span className="menu-price">20.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Karaage</span>
                                <span className="menu-price">21.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Katsu</span>
                                <span className="menu-price">25.8</span>
                            </div>
                        </div>
                        <div className="home-soba menu-div">
                            <div className="menu-container">
                                <span className="menu-category">UDON/SOBA</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Veggie</span>
                                <span className="menu-price">17.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Veggie Curry</span>
                                <span className="menu-price">18.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Veggie Tempura</span>
                                <span className="menu-price">20.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Prawn Veggie Tempura</span>
                                <span className="menu-price">25.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon Miso</span>
                                <span className="menu-price">25.8</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-column4 menu-column">
                        <div className="home-salads menu-div">
                            <div className="menu-container">
                                <span className="menu-category">SALAD</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tofu</span>
                                <span className="menu-price">21.2</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Teriyaki Salmon</span>
                                <span className="menu-price">23.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Karaage</span>
                                <span className="menu-price">21.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon Karaage</span>
                                <span className="menu-price">25.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna Karaage</span>
                                <span className="menu-price">25.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Fresh Salmon</span>
                                <span className="menu-price">22.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Fresh Tuna</span>
                                <span className="menu-price">24.8</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-column3 menu-column">
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">RAMEN</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Veggie</span>
                                <span className="menu-price">17.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Spicy Veggie</span>
                                <span className="menu-price">17.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Spicy Pork</span>
                                <span className="menu-price">18.3</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">ADD ON</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Kimchi</span>
                                <span className="menu-price">3</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tofu</span>
                                <span className="menu-price">5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Halloumi</span>
                                <span className="menu-price">5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Veggie Tempura</span>
                                <span className="menu-price">5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Karaage</span>
                                <span className="menu-price">5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Katsu</span>
                                <span className="menu-price">7</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Pork Belly</span>
                                <span className="menu-price">7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        } else if (this.state.divShown === 1) {
            activeDiv = <div className="menu">
                <div className="menu-items">
                    <div className="home-column11 menu-column">
                        <div className="home-hand-roll menu-div">
                            <div className="menu-container">
                                <span className="menu-category">HAND ROLL</span>
                                <span className="menu-category">1PC</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Fresh Veggie</span>
                                <span className="menu-price">4.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Mix Veggie Tempura</span>
                                <span className="menu-price">5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Daikon Tempura</span>
                                <span className="menu-price">5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Halloumi Tempura</span>
                                <span className="menu-price">5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna Avo</span>
                                <span className="menu-price">5.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Seared Octopus</span>
                                <span className="menu-price">5.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Anchovy Cream Cheese</span>
                                <span className="menu-price">6.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon Avo</span>
                                <span className="menu-price">6</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Fresh Tuna Avo</span>
                                <span className="menu-price">6.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Avo</span>
                                <span className="menu-price">5.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Prawn Tempura</span>
                                <span className="menu-price">7</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-column21 menu-column">
                        <div className="home-sashimi menu-div">
                            <div className="menu-container">
                                <span className="menu-category">SASHIMI</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon (7pc)</span>
                                <span className="menu-price">18.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna (5pc)</span>
                                <span className="menu-price">18.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">
                                    <span>Mixed (5pc each)</span>
                                    <br></br>
                                    <span>Tuna &amp; Salmon</span>
                                </span>
                                <span className="menu-price">24.8</span>
                            </div>
                        </div>
                        <div className="home-inside-out menu-div">
                            <div className="menu-container">
                                <span className="menu-category">INSIDE OUT</span>
                                <span className="menu-category">6PC</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna Avo</span>
                                <span className="menu-price">12.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon Avo</span>
                                <span className="menu-price">13.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Fresh Tuna Avo</span>
                                <span className="menu-price">15.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Karaage Avo</span>
                                <span className="menu-price">15.8</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">TARTARE</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon</span>
                                <span className="menu-price">15.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna</span>
                                <span className="menu-price">15.8</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-column31 menu-column">
                        <div className="home-hosomaki menu-div">
                            <div className="menu-container">
                                <span className="menu-category">HOSOMAKI</span>
                                <span className="menu-category">6PC</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Avocado</span>
                                <span className="menu-price">4.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Cucumber</span>
                                <span className="menu-price">4.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna</span>
                                <span className="menu-price">4.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon</span>
                                <span className="menu-price">5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Fresh Tuna</span>
                                <span className="menu-price">6</span>
                            </div>
                        </div>
                        <div className="home-special-roll menu-div">
                            <div className="menu-container">
                                <span className="menu-category">SPECIAL ROLL</span>
                                <span className="menu-category">8PC</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Vegan</span>
                                <span className="menu-price">19.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Hokkaido</span>
                                <span className="menu-price">23.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Dragon</span>
                                <span className="menu-price">25.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Kaisen Norimaki</span>
                                <span className="menu-price">25.8</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-column41 menu-column">
                        <div className="home-nigiri menu-div">
                            <div className="menu-container">
                                <span className="menu-category">NIGIRI</span>
                                <span className="menu-category">2PC</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Inari</span>
                                <span className="menu-price">4.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon</span>
                                <span className="menu-price">5.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna</span>
                                <span className="menu-price">6.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Seared Salmon</span>
                                <span className="menu-price">6.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Seared Scallop</span>
                                <span className="menu-price">7.5</span>
                            </div>
                        </div>
                        <div className="home-sushi-tempura menu-div">
                            <div className="menu-container">
                                <span className="menu-category">SUSHI TEMPURA</span>
                                <span className="menu-category">1PC</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon</span>
                                <span className="menu-price">7</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Halloumi</span>
                                <span className="menu-price">7</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken</span>
                                <span className="menu-price">7</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">CARPACCIO</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Octopus</span>
                                <span className="menu-price">17.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Scallop</span>
                                <span className="menu-price">18.8</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        } else if (this.state.divShown === 2) {
            activeDiv = <div className="menu">
                <div className="menu-items">
                    <div className="home-column22 menu-column">
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">TAPAS</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Okonomiyaki</span>
                                <span className="menu-price">14.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">
                                    <span>Fried Cauliflower</span>
                                    <br></br>
                                    <span>w/ Tamari</span>
                                    <br></br>
                                    <span>w/ Parmesan</span>
                                </span>
                                <span className="menu-price">
                                    <br></br>
                                    <span>12.8</span>
                                    <br></br>
                                    <span>14.8</span>
                                </span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Karaage</span>
                                <span className="menu-price">13.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Caramelised Karaage</span>
                                <span className="menu-price">14.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Spciy Caramelised Karaage</span>
                                <span className="menu-price">14.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Eggplant Miso Dengaku</span>
                                <span className="menu-price">16.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Agedashi Tofu</span>
                                <span className="menu-price">13.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tuna Karaage</span>
                                <span className="menu-price">16.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon Karaage</span>
                                <span className="menu-price">16.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Ebimayo</span>
                                <span className="menu-price">19.8</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-column32 menu-column">
                        <div className="home-tempura menu-div">
                            <div className="menu-container">
                                <span className="menu-category">TEMPURA</span>
                                <span className="menu-category">W/ DIP +1</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Daikon</span>
                                <span className="menu-price">15.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Veggie</span>
                                <span className="menu-price">16.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Halloumi</span>
                                <span className="menu-price">12.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">
                                    <span>Seafood
                                        <br />
                                        <span>Salmon, Prawn & Scallop</span>
                                    </span>
                                </span>
                                <span className="menu-price">26.8</span>
                            </div>
                        </div>
                        <div className="home-bites menu-div">
                            <div className="menu-container">
                                <span className="menu-category">BITES</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Edamame</span>
                                <span className="menu-price">7</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Garlic Edamame</span>
                                <span className="menu-price">8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Spicy Garlic Edamame</span>
                                <span className="menu-price">8.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Seaweed Salad</span>
                                <span className="menu-price">7</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Kimchi</span>
                                <span className="menu-price">7</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Tsukemono</span>
                                <span className="menu-price">7</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Renkon Chips</span>
                                <span className="menu-price">7</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item"><span>Vegan Plate</span>
                                    <br />
                                    <span>Edamame, Kimchi, Fennel</span></span>
                                <span className="menu-price">10</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-column42 menu-column">
                        <div className="home-gyoza menu-div">
                            <div className="menu-container">
                                <span className="menu-category">GYOZA</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Pork</span>
                                <span className="menu-price">10.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken</span>
                                <span className="menu-price">10.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Prawn</span>
                                <span className="menu-price">10.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Veggie</span>
                                <span className="menu-price">10.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Mixed</span>
                                <span className="menu-price">15.8</span>
                            </div>
                        </div>
                        <div className="home-japadogs menu-div">
                            <div className="menu-container">
                                <span className="menu-category">JAPADOGS</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chicken Karaage</span>
                                <span className="menu-price">10.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Mix Veggie Tempura</span>
                                <span className="menu-price">10.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Halloumi Tempura</span>
                                <span className="menu-price">10.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Salmon Tempura</span>
                                <span className="menu-price">11.8</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">SIDES</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Miso Soup</span>
                                <span className="menu-price">3.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Rice</span>
                                <span className="menu-price">3.8</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        } else if (this.state.divShown === 3) {
            activeDiv =
            <div className="menu">
                <div className="menu-items">
                    <div className="menu-column">
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">BEER</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Asahi</span>
                                <span className="menu-price">9.5</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Orion</span>
                                <span className="menu-price">13</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">MOCKTAIL</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Lemon Sour</span>
                                <span className="menu-price">9</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Yuzu Punch</span>
                                <span className="menu-price">8</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">PLUM WINE</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">On the rocks</span>
                                <span className="menu-price">15.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">With soda</span>
                                <span className="menu-price">16.8</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-column">
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">WARM SAKE</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">
                                    <span>Hakushika</span>
                                    <br />
                                    <span>Small</span>
                                    <br />
                                    <span>Large</span>
                                </span>
                                <span className="menu-price">
                                    <br />
                                    <span>13</span>
                                    <br />
                                    <span>23</span>
                                </span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Uonuma</span>
                                <span className="menu-price">30</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">RED WINE</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Shiraz Glass</span>
                                <span className="menu-price">12</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Shiraz Bottle</span>
                                <span className="menu-price">40</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">WHITE WINE</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Sauvignon Blanc Glass</span>
                                <span className="menu-price">12</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Sauvignon Blanc Bottle</span>
                                <span className="menu-price">40</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Chardonnay Bottle</span>
                                <span className="menu-price">40</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-column">
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">COCKTAIL</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Lemon Sour Highball</span>
                                <span className="menu-price">16.8</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Yuzu Salty Dog</span>
                                <span className="menu-price">20</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Byron Samurai Mojito</span>
                                <span className="menu-price">19</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Bloody Mary</span>
                                <span className="menu-price">17.8</span>
                            </div>
                        </div>
                        <div className="menu-div">
                            <div className="menu-container">
                                <span className="menu-category">SAKE</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Ozeki</span>
                                <span className="menu-price">13</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Uonuma</span>
                                <span className="menu-price">27</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Kubota</span>
                                <span className="menu-price">38</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Dassai Junmai Daiginjo</span>
                                <span className="menu-price">42</span>
                            </div>
                            <div className="menu-container">
                                <span className="menu-item">Hakutsuru Sayuri</span>
                                <span className="menu-price">24</span>
                            </div>
                        </div>
                        </div>
                        <div className="menu-column">
                            <div className="menu-div">
                                <div className="menu-container">
                                    <span className="menu-category">NON-ALCOHOLIC</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">Bottled Water</span>
                                    <span className="menu-price">3.5</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">San Pellegrino</span>
                                    <span className="menu-price">6.5</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">Orange Juice</span>
                                    <span className="menu-price">4</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">Apple Juice</span>
                                    <span className="menu-price">4</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">Coca Cola</span>
                                    <span className="menu-price">4</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">Coconut Water</span>
                                    <span className="menu-price">5.5</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">Cold Green Tea</span>
                                    <span className="menu-price">4</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">Hot Green Tea</span>
                                    <span className="menu-price">3</span>
                                </div>
                                <div className="menu-container">
                                    <span className="menu-item">Green Tea Lychee Lemonade</span>
                                    <span className="menu-price">7.5</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div >;
        }


        return (
            <div id="menu" className="home-menu">
                <div className="home-section">
                    <span className="menu-header">MENU</span>
                </div>
                <div className="home-title">
                    <button onClick={() => this.handleMainsClick()} className="menu-button"
                        style={{
                            ...{ color: this.state.divShown === 0 ? "#e31e25" : "var(--dl-color-darkmode-100" },
                            ...{ "text-decoration": this.state.divShown === 0 ? "underline" : "none" }
                        }}
                    >MAINS</button>
                    <button onClick={() => this.handleSushiClick()} className="menu-button"
                        style={{
                            ...{ color: this.state.divShown === 1 ? "#e31e25" : "var(--dl-color-darkmode-100" },
                            ...{ "text-decoration": this.state.divShown === 1 ? "underline" : "none" }
                        }}
                    >SUSHI</button>
                    <button onClick={() => this.handleSidesClick()} className="menu-button"
                        style={{
                            ...{ color: this.state.divShown === 2 ? "#e31e25" : "var(--dl-color-darkmode-100" },
                            ...{ "text-decoration": this.state.divShown === 2 ? "underline" : "none" }
                        }}
                    >SIDES</button>
                    <button onClick={() => this.handleDrinksClick()} className="menu-button"
                        style={{
                            ...{ color: this.state.divShown === 3 ? "#e31e25" : "var(--dl-color-darkmode-100" },
                            ...{ "text-decoration": this.state.divShown === 3 ? "underline" : "none" }
                        }}
                    >DRINKS</button>
                </div>
                {activeDiv}
            </div >
        );
    }

}

export default Menu;