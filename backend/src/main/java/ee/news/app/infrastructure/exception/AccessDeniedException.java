package ee.news.app.infrastructure.exception;

public class AccessDeniedException extends RuntimeException{
    public AccessDeniedException(String errorMessage) {
        super(errorMessage);
    }
}
