package ee.news.app.service.posts;

import ee.news.app.persistence.posts.Posts;
import ee.news.app.persistence.posts.PostsRepository;
import ee.news.app.persistence.user.User;
import ee.news.app.persistence.user.UserRepository;
import ee.news.app.service.posts.dto.PostsDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostsService {
    private final PostsRepository postsRepository;
    private final PostsMapper postsMapper;
    private final UserRepository userRepository;

    public String newPost(PostsDto postDto) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Posts newPost = postsMapper.fromDto(postDto);
        newPost.setUser(user);
        postsRepository.save(newPost);
        return "New post saved";
    }

    public List<PostsDto> allPosts() {
        List<Posts> allPosts = postsRepository.findAll();
        List<PostsDto> allPostsDto = new ArrayList<>();
        for (Posts post : allPosts) {
            allPostsDto.add(postsMapper.toDto(post));
        }
        return allPostsDto;
    }
}
