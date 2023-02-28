function dogYears(planet,age){
    const earthYears = age / 31557600;
    let dogYears = earthYears * 7;

    switch (planet) {
        case "mercury":
            dogYears /= 0.2408467;
            break
        case "venus":
            dogYears /= 0.61519726;
            break
        case "mars":
            dogYears /= 1.8808158;
            break
        case "jupiter":
            dogYears /= 11.862615;
            break
        case "saturn": 
        dogYears /= 29.447498;
        break
        case "uranus":
            dogYears /= 84.016846;
            break
        case "neptune":
            dogYears /= 164.79132;
            break
        default:
            break
    }
    return parseFloat(dogYears.toFixed(2));
}