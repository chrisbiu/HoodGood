        var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
        
        var lighthouseRock = {
          gateClosed: true,
          weaponBulbs: superBlinders,
          capacity: 30,
          secretPassageTo: "Underwater Outpost",
          numRangers: 0
        };
        
        function addRanger(location, name, skillz, station) {
            location.numRangers++;
            location["ranger " + location.numRangers] = {
                name: name,
                skillz: skillz,
                station: station
            }
        }
        function myFunction() {
            window.alert(addRanger(lighthouseRock, "Christopher Johnson", "nerd, nerd", 9));
        }
        myFunction();