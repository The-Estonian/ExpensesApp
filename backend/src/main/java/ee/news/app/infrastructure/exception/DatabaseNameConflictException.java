package ee.news.app.infrastructure.exception;

public class DatabaseNameConflictException extends RuntimeException {
    public DatabaseNameConflictException(String errorMessage) {
        super(errorMessage);
    }
}
