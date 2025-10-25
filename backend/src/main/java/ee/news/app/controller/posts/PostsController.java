package ee.news.app.controller.posts;

import ee.news.app.persistence.posts.Posts;
import ee.news.app.service.posts.PostsService;
import ee.news.app.service.posts.dto.PostsDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = {"http://localhost:5173", "127.0.0.1:80"}, allowCredentials = "true")
@RequestMapping("/api/v1")
@RestController
@RequiredArgsConstructor
public class PostsController {

    private final PostsService postsService;

    @GetMapping("/posts")
    @Operation(summary = "Returns list of all posts", description = "If there are no posts, returns an empty array")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "OK")})
    public List<Posts> getPosts() {

        return postsService.allPosts();
    }

    @PostMapping("/posts")
    @Operation(summary = "Returns list of all posts", description = "If there are no posts, returns an empty array")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "OK")})
    public String newPosts(@RequestBody PostsDto postsDto) {
        return postsService.newPost(postsDto);
    }
}
