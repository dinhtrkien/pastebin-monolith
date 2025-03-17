const analyticsService = require('./AnalyticsService');


class AnalyticsController {

    async getAnalytics(req, res) {
        try {
            const pasteId = 1;
            const month = 3;
            const year = 2025;   
            const analytics = await analyticsService.getAnalyticsForMonth(pasteId, month, year);         
            res.send(analytics);
        } catch (error) {
            console.error(error);
            res.status(500).send("Error retrieving analytics");
        }
    }
}

module.exports =  new AnalyticsController();