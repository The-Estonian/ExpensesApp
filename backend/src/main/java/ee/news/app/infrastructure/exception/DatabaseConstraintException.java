package ee.news.app.infrastructure.exception;

public class DatabaseConstraintException extends RuntimeException {
    public DatabaseConstraintException(String errorMessage) {
        super(errorMessage);
    }
}

