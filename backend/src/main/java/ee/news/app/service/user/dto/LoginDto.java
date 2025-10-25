package ee.news.app.service.user.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.io.Serializable;

@Data
public class LoginDto implements Serializable {

    @Size(max = 20)
    @NotNull
    private String username;

    @NotNull
    private String password;
}
