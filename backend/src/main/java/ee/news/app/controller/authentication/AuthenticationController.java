package ee.news.app.controller.authentication;

import ee.news.app.service.user.dto.LoginDto;
import ee.news.app.service.user.dto.LoginResponseDto;
import ee.news.app.service.user.dto.RegistrationDto;
import ee.news.app.service.user.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1")
@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final UserService userService;

    @PostMapping("/register")
    @Operation(summary = "Registration. Returns userId and roleName", description = """
            A new user is created in the system.
            If the username already exists, an error with error code 409 (CONFLICT) is thrown.""")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "OK"), @ApiResponse(responseCode = "409", description = "Username already exists")})
    public String userRegistration(@RequestBody RegistrationDto registrationDto) {
        return userService.register(registrationDto);
    }

    @PostMapping("/login")
    @Operation(summary = "Login. Returns userId and roleName", description = """
            Searches the system for a user by username and password.
            If no match is found, an error with error code 403 (FORBIDDEN) is thrown.""")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "OK"), @ApiResponse(responseCode = "403", description = "Invalid username or password")})
    public LoginResponseDto login(@RequestBody LoginDto loginDto) {
        return userService.login(loginDto);
    }
}
