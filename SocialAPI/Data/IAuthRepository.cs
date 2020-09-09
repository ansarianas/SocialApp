using System.Threading.Tasks;
using SocialAPI.Model;

namespace SocialAPI.Data
{
    /*
    1- Check if a user exists
    2- Register user
    3- Login user
    */
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);

        Task<User> Login(string username, string password);
        
        Task<bool> IsExistingUser(string username);
    }
}