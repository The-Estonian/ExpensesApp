package ee.expenses.app.controller.expense;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {"http://localhost:5173"}, allowCredentials = "true")
@RequestMapping("/api/v1")
@RestController
@RequiredArgsConstructor
public class CategoriesController {

    @GetMapping("/expense")
    @Operation(summary = "Returns list of all expenses", description = "If there are no expenses, returns an empty array")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "OK")})
    public String getAllSectors() {
        return "Test";
    }

}
