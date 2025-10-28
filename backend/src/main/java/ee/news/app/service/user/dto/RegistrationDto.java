package ee.news.app.service.user.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.io.Serializable;

@Data
public class RegistrationDto implements Serializable {

    @Size(max = 20)
    @NotNull
    private String username;

    @Size(max = 20)
    @NotNull
    private String password;

    @NotNull
    private String email;
}
