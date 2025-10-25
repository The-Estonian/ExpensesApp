package ee.news.app.service.user;

import ee.news.app.persistence.role.Role;
import ee.news.app.persistence.role.RoleRepository;
import ee.news.app.persistence.user.User;
import ee.news.app.persistence.user.UserRepository;
import ee.news.app.service.user.dto.LoginDto;
import ee.news.app.service.user.dto.RegistrationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;


    public String register(RegistrationDto registrationDto) {
        if (userRepository.existsBy(registrationDto.getUsername())) {
            return "Username already in use!";
        }
        if (userRepository.existsBy(registrationDto.getEmail())) {
            return "Email already in use!";
        }

        User newUser = userMapper.registrationToUser(registrationDto);
        newUser.setRole(getDefaultRole());
        newUser.setPassword(passwordEncoder.encode(registrationDto.getPassword()));

        userRepository.save(newUser);

        return "Registration success!";
    }

    public String login(LoginDto loginDto) {
        return "Logged in!";
    }

    private Role getDefaultRole() {
        return roleRepository.findByName("CUSTOMER").orElseGet(() -> {
            Role role = new Role("CUSTOMER");
            return roleRepository.save(role);
        });
    }

}
