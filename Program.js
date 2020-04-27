
/**
 * Program is the core of the application.
 */
class Program
{

    /**
     * Initializes a new instance of Program. 
     */
    constructor()
    {

        this.BulkImport([
            "Test1.js",
            "Main.js",
            "Test2.js"
        ]);

        addEventListener("load", () => new Main());

    }

    /**
     * Injects the given scripts into <head>.
     */
    BulkImport(files)
    {

        for (var i = 0; i < files.length; i++)
        {
            var script = document.createElement("script");
            script.src = files[ i ];
            document.head.appendChild(script);
        }

    }

}

new Program();
