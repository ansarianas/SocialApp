using System.ComponentModel.DataAnnotations;

namespace SocialAPI.DTO
{
    public class RegisterUserDTO
    {
        [Required(ErrorMessage = "Username cant be empty")]
        public string Username { get; set; }
        
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password length must be between 4 to 8.")]
        public string Password { get; set; }
    }
}