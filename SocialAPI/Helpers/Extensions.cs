using Microsoft.AspNetCore.Http;

namespace SocialAPI.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Custom-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Custom-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}