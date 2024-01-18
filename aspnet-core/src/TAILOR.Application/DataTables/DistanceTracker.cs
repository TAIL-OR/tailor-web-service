using System;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;

public class DistanceTracker : ApplicationService{
    public DistanceTracker(){}

public async Task<double> FindDistance(double startla, double startlo, double endla, double endlo,string mode)
    {
        Thread.CurrentThread.CurrentCulture = System.Globalization.CultureInfo.InvariantCulture;
        string apiKey = "AIzaSyCiEJnlMy84c5zo8LdJW2D6fKgCMDIVd_8"; // Replace with your Google Maps API Key
        string startString = $"{startla}%2C+{startlo}";
        string finishString = $"{endla}%2C+{endlo}";

        string url = $"https://maps.googleapis.com/maps/api/directions/json?origin={startString}&destination={finishString}&key={apiKey}&mode={mode}";

        using (HttpClient client = new HttpClient())
        {
            HttpResponseMessage response = await client.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                string jsonResult = await response.Content.ReadAsStringAsync();
                JsonDocument result = JsonDocument.Parse(jsonResult);

                double distanceValue = result.RootElement.GetProperty("routes")[0]
                    .GetProperty("legs")[0]
                    .GetProperty("distance")
                    .GetProperty("value")
                    .GetDouble();

                return distanceValue;
            }
            else
            {
                // Handle the error case
                Console.WriteLine($"Error: {response.StatusCode}");
                return -1;
            }
        }
    }
}