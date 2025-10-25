package ee.news.app.service.user;

import ee.news.app.persistence.user.User;
import ee.news.app.service.user.dto.LoginDto;
import ee.news.app.service.user.dto.RegistrationDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper {

    @Mapping(source = "username", target = "username")
    @Mapping(ignore = true, target = "password")
    @Mapping(source = "email", target = "email")
    User registrationToUser(RegistrationDto registrationDto);


    User loginToUser(LoginDto loginDto);
}
