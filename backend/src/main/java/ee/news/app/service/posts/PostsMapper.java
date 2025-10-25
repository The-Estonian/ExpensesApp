package ee.news.app.service.posts;

import ee.news.app.persistence.posts.Posts;
import ee.news.app.service.posts.dto.PostsDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface PostsMapper {
    @Mapping(source = "title", target = "title")
    @Mapping(source = "post", target = "post")
    PostsDto toDto(Posts posts);


    @Mapping(source = "title", target = "title")
    @Mapping(source = "post", target = "post")
    Posts fromDto(PostsDto postsDto);
}
