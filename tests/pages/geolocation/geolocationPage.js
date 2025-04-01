export class GeolocationPage {
    constructor(page, context) {
        this.page = page;          
        this.context = context;     
        this.url = "https://qaplayground.dev/apps/geolocation/";
        this.locationInfo = this.page.locator("#location-info");
    }

    // Navigate to the geolocation page
    async visit() {
        await this.page.goto(this.url);
    }

    // Set geolocation to Washington, D.C.
    async setGeolocation() {
        try {
            await this.context.grantPermissions(["geolocation"]);
            await this.context.setGeolocation({ longitude: -77.0369, latitude: 38.9072 }); // Washington, D.C.
            console.log("Geolocation set to Washington, D.C.");
        } catch (error) {
            console.error("Failed to set geolocation:", error);
            throw error; // Re-throw to allow calling code to handle it
        }
    }

    // Click the "Get Location" button
    async clickGetLocation() {
        await this.page.locator("#get-location").click();
    }

}