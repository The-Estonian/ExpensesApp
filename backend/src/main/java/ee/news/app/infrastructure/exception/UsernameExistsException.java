package ee.news.app.infrastructure.exception;

public class UsernameExistsException extends RuntimeException{
    public UsernameExistsException(String errorMessage) {
        super(errorMessage);
    }

}
