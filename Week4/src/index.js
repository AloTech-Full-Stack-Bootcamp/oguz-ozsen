import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    //(If a serie has been watched) {
    // Update the count of watched series: "numberOfWatched"
    if (serie.isWatched) {
      this.numberOfWatched += 1;
      // Check for "lastSerie" property, set if we don't.
      if (!this.lastSerie) {
        this.lastSerie = serie;
      }
      // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater,
      if (
        new Date(serie.finishedDate) > new Date(this.lastSerie.finishedDate)
      ) {
        // set "lastSerie" prop to "serie" object.
        this.lastSerie = serie;
      }
    }

    //}
     else {
       this.numberOfUnWatched+=1;
      // If a serie hasn't been watched:
        // Check if serie has "isCurrent" prop
        if (serie.isCurrent) {
          // Check if we have a "currentSerie" property. Set if we don't.
          this.currentSerie = serie;
        }
        else if (!this.nextSerie) {
          this.nextSerie = serie;
        }
      // Check if we have a "nextSerie" property as well - if we didn't
      // set the .currentSerie property, set the .nextSerie property.
    }

    //it should also update the number of series marked as watched / unwatched:
    //"numberOfWatched" and "numberOfUnWatched"
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    //Use the .add function to handle adding series, so we keep counts updated.
    series.map(
      serie => this.add(serie)
    );
  }

  this.finishSerie = function () {
    this.series.map((serie) => {
      const time = new Date()
      let dateTime = time.getDate() + "." + time.getMonth() + "." + time.getFullYear();
      if (serie.isCurrent) {
        return (
          // Set isCurrent property to false when serial is finished
          (serie.isCurrent = false),
          // Add the isWatched property with a value of true
          (serie.isWatched = true),
          // Add the finishedDate property with a value of Now
          (serie.finishedDate = dateTime)
        );
      }
    });
    // find and update currently watching serie in "this.series" array
    // update "lastSerie" with the finished one
    // set "currentSerie" with the next one
    // set new nextSerie value with the next one which has not been watched.
    // update "numberOfWatched" and "numberOfUnWatched" props
    this.lastSerie = this.currentSerie;
    this.nextSerie.isCurrent = true;
    this.currentSerie = this.nextSerie;
    this.nextSerie = undefined;
    series.map((serie) => {
      if (!serie.isCurrent && !serie.isWatched && !this.nextSerie) {
        this.nextSerie = serie;
      }
    });
    this.numberOfWatched += 1;
    this.numberOfUnWatched -= 1;
  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
