import data from "./data.json";
import "./styles.scss";
import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerval from "./assets/images//icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

const getIcon = (category) => {
    switch (category) {
        case "Reaction":
            return iconReaction;
        case "Memory":
            return iconMemory;
        case "Verbal":
            return iconVerval;
        case "Visual":
            return iconVisual;
        default:
            break;
    }
};

const getAverage = (data) => {
    let sum = [];

    data.map((item) => sum.push(item.score));
    console.log(
        sum.reduce(function (a, b) {
            return a + b;
        })
    );

    const average =
        sum.reduce(function (a, b) {
            return a + b;
        }) / data.length;

    return Math.round(average);
};

function App() {
    return (
        <div className="container">
            <main className="card">
                <div className="result-card">
                    <h1 className="title">Your Result</h1>
                    <div className="result-number">
                        <div className="main">{getAverage(data)}</div>
                        <div className="secondary">of 100</div>
                    </div>
                    <div className="description">
                        <div className="header">Great</div>
                        <div className="description">
                            You scored higher than 65% of the people who have
                            taken these tests
                        </div>
                    </div>
                </div>
                <div className="summary-card">
                    <div className="title">Summary</div>
                    <div className="scores">
                        {data.map((item) => (
                            <div
                                className={`score reaction ${item.category.toLowerCase()}`}
                            >
                                {" "}
                                <div className="text">
                                    {" "}
                                    <img
                                        src={getIcon(item.category)}
                                        className="icon"
                                        alt="icon"
                                    />
                                    {item.category}
                                </div>{" "}
                                <div className="result">
                                    <div className="score-final">
                                        {item.score}
                                    </div>
                                    <div className="out-of">/ 100</div>
                                </div>{" "}
                            </div>
                        ))}
                    </div>
                    <button>Continue</button>
                </div>
            </main>
        </div>
    );
}

export default App;
