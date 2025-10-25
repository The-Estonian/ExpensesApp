package ee.news.app.service.posts.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.io.Serializable;

@Data
public class PostsDto implements Serializable {
    @Size(max = 20)
    @NotNull
    private String title;

    @NotNull
    private String post;
}
