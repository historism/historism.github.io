const interval = 250 // ms

const prefix = "@"
const title = "tear"
const domain = ".wtf"

function SetTitle() {
    let index = 0;
    let deleting = false;

    const fulltext = title+domain

    setInterval(() => {
        if(!deleting)
        {
            // typing
            document.title = "@" + fulltext.slice(0, index +1) // Starts writing at Ts
            index++;

            if (index==fulltext.length)
            {
                deleting=true;
                setTimeout(() => {}, 500); // Small delay between writing and removing
            } 
        } else {
            document.title = "@" + fulltext.slice(0, index -1);
            index--;

            if(index==1){ // Stops deleting at T
                deleting =false;
            }
        }
    }, interval);
}

SetTitle();